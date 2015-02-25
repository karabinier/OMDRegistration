var app = angular.module('loginApp', ['RegistrationProvider','ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/events/:eventId', {
        templateUrl: 'eventTemplate.html',
        controller: 'appCtrl'
      }).
    when('/register/:eventId', {
        templateUrl: 'registerTemplate.html',
        controller: 'appCtrl'
      }). 
    when('/home', {
        templateUrl: 'homeTemplate.html',
        controller: 'appCtrl'
      }). 
    when('/contact', {
        templateUrl: 'contactTemplate.html',
        controller: 'appCtrl'
      }).     
      otherwise({
        redirectTo: '/home'
      });
  }]);

app.run(function ($rootScope) {

    /*
    window.fbAsyncInit = function () {
        FB.init({
            appId:'1392918927599710',
            status:true,
            cookie:true,
            xfbml:true
        });
        
        FB.Event.subscribe('auth.statusChange', function(response) {
            $rootScope.$broadcast("fb_statusChange", {'status': response.status});
        });
    };
    */
    (function (d) {
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        /*if (d.getElementById(id) == null) {


            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }*/

        /*id="spreadSheetSource";
        if (d.getElementById(id)==null) {

            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "http://spreadsheets.google.com/feeds/cells/0AvUp2Qmvkk-zdHFXTV9PYS1EaUhXY1UtdGhtSjE5X1E/od6/public/basic?alt=json-in-script&callback=processJson";
            ref.parentNode.insertBefore(js, ref);
        }*/

    }(document));

});


function processJson(data) {
   var obj = data;
    var entries = obj.feed.entry || [];
    var i = 0;

    var currentRowNr=1;
    var alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var expectedColNr =1;

    var currentDataRow = new Array();
    var data = new Array();

    while (i < entries.length) {

        var rowNr = parseInt(entries[i].title["$t"].substring(1));
        var col = entries[i].title["$t"].substring(0,1);
        var colNr = alphabet.indexOf(col);

        if(rowNr == currentRowNr)
        {
            if(expectedColNr == colNr)
                currentDataRow.push(entries[i].content["$t"]);
            else if(expectedColNr < colNr)
            {
                for(var j=0; j<(colNr-expectedColNr);j++)
                {
                    currentDataRow.push(null);
                    expectedColNr++;
                }
                currentDataRow.push(entries[i].content["$t"]);
            }

        }
        else if(rowNr > currentRowNr)
        {
            data.push({
               'timeStamp':currentDataRow[0],
                'pointsBrazil':currentDataRow[1],
                'Be-Por':currentDataRow[2]
            });

            expectedColNr =1;
            currentRowNr++;
            currentDataRow = new Array();

            if(expectedColNr == colNr)
                currentDataRow.push(entries[i].content["$t"]);
            else if(expectedColNr < colNr)
            {
                for(var j=0; j<(colNr-expectedColNr);j++)
                {
                    currentDataRow.push(null);
                    expectedColNr++;
                }
                currentDataRow.push(entries[i].content["$t"]);
            }

        }

        expectedColNr++;
        i++;

    }

    if(currentDataRow.length > 0)
    {
        data.push({
            'timeStamp':currentDataRow[0],
            'pointsBrazil':currentDataRow[1],
            'Be-Por':currentDataRow[2]
        });
    }

    var angScope = angular.element(document.body).scope();
    angScope.$apply(function() {

        angScope.updateSession(data);
    });
}

/*
 <div id="fb-root"></div>
 <script>(function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&appId=1392918927599710&version=v2.0";
 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));</script>

 */