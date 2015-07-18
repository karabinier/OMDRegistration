
function appCtrl(Registration, $scope, $rootScope, $http, $location, $routeParams, $window, $sce) {
    $scope.info = {};
       // $scope.browserSupported = $scope.checkBrowserSupport();
        $rootScope.updateSession = function (params) {
        $rootScope.session = params;
        if(params.length > 0)
            $rootScope.currentUser = params[2];

            var url = "http://spreadsheets.google.com/feeds/cells/0AvUp2Qmvkk-zdHFXTV9PYS1EaUhXY1UtdGhtSjE5X1E/od6/public/basic?alt=json-in-script&callback=?";
    
        $rootScope.userData = {'pointsBrazil': '' };
                        
            
    };
    
/*      $scope.$on('$viewContentLoaded', function(){
          resize_iframe();*/
  });
    
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
            return "active"
        } else {
          return ""
        }
    }

    $scope.postToGoogle = function () {
        Registration.postToGoogleSpreadsheet($scope.registration);
        $("#registrationForm").attr("disabled","disabled");
        $('.alert').show();
    };

    $scope.cancel = function () {
        $window.history.back();
    };

    $scope.getInfo = function () {
        /*FB.api('/' + $rootScope.session.Registration_id, function (response) {
            console.log('Good to see you, ' + response.name + '.');
        });*/
        alert($rootScope.currentUser.pointsBrazil);
        $rootScope.info = $rootScope.session;

    };
    
    $scope.checkBrowserSupport = function(){
           var ie = $scope.ie;
            
            if(ie!=undefined && ie <=9)
                return false;
            return true;
    };
    
    $scope.ie = (function(){

                var undef,
                    v = 3,
                    div = document.createElement('div'),
                    all = div.getElementsByTagName('i');

                while (
                    div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                    all[0]
                );

                return v > 4 ? v : undef;

            }());

    
    $scope.activities = Registration.getActivities();
    $scope.topUrl = $sce.trustAsResourceUrl("http://sites.google.com/site/omdtervuren/" + $routeParams.eventId );
    $scope.activityId = $routeParams.eventId;
    $scope.activityUrl = $sce.trustAsResourceUrl(getActivityUrl());
    $scope.subActivityUrl = $sce.trustAsResourceUrl(getSubActivityUrl());
    
    function getActivityUrl(){
        var googleSitesUrl="http://sites.google.com/site/omdtervuren/omdtervuren/";
        if($routeParams.eventId != 0)
            return "http://sites.google.com/site/omdtervuren/omdtervuren/" + $routeParams.eventId + "?output=embed-";  
        return googleSitesUrl + "?output=embed-";
        
    };
    
    function getSubActivityUrl(){
        var googleSitesUrl="http://sites.google.com/site/omdtervuren/omdtervuren/";
        if($routeParams.eventId != 0)
            return "http://sites.google.com/site/omdtervuren/omdtervuren/" + $routeParams.eventId + "/" + $routeParams.subEvent + "?output=embed-";  
        return googleSitesUrl + "?output=embed-";
        
    };

  $scope.registration = {
    selectedActivity : $scope.activities[$routeParams.eventId],
    firstName : "",
    lastName : "",
    tel: "",
    email : "",
    postcode : "",
      birthDate : "",
      address : "",
      city : "",
    numberOfPersons :0,
    hourDeparture : "",
    comment : ""
  };
}