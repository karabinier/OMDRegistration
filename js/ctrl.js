
function appCtrl(Registration, $scope, $rootScope, $http, $location, $routeParams) {
    $scope.info = {};
       // $scope.browserSupported = $scope.checkBrowserSupport();
        $rootScope.updateSession = function (params) {
        $rootScope.session = params;
        if(params.length > 0)
            $rootScope.currentUser = params[2];

            var url = "http://spreadsheets.google.com/feeds/cells/0AvUp2Qmvkk-zdHFXTV9PYS1EaUhXY1UtdGhtSjE5X1E/od6/public/basic?alt=json-in-script&callback=?";
    
        $rootScope.userData = {'pointsBrazil': '' };
                        
            
    };

    $scope.postToGoogle = function () {
        Registration.postToGoogleSpreadsheet($scope.registration);
        $("#registrationForm").attr("disabled","disabled");
        $('.alert').show();
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

  $scope.registration = {
    selectedActivity : $scope.activities[$routeParams.eventId],
    firstName : "",
    lastName : "",
    tel: "",
    email : "",
    postcode : "",
      birthDate : "",
    numberOfPersons :0,
    hourDeparture : "",
    comment : ""
  };
}