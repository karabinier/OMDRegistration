var app = angular.module('RegistrationProvider', []);
app.factory('Registration', function ($rootScope) {
    return {
        postToGoogleSpreadsheet:function(registration) {

            $.ajax({//https://docs.google.com/spreadsheets/d/1m418mlWiB-m4oilXZWp49-MV8xGQ4ZsBE3Oc-ywfDnM/pubhtml
                url: "https://docs.google.com/a/lacage.be/forms/d/1b8TYQf0ITtSpY4FuhC86jrfCPYWtMtOntIj78Thldqw/formResponse",
                data: this.getData(registration),
                type: "POST",
                dataType: "xml",
                /*statusCode: {
                    0: function () {
                        window.location.replace("default.html");
                    },
                    200: function () {
                        window.location.replace("default.html");
                    }
                }*/
            });
        },
        
        getData:function(registration) {   
            
            if(registration.selectedActivity.id == 9)
                return { /* in het geval van registratie voor M-bassadeur zijn ander velden nodig*/
                    "entry_125932087": registration.selectedActivity.name,
                    "entry_2023678217": registration.firstName, 
                    "entry_1841105698": registration.lastName,
                    "entry_1286405048": registration.tel,
                    "entry_351041498": registration.email,
                    "entry_922331852": registration.birthDate,
                    "entry_1995805459": 'nvt',
                    "entry_1443470760": 'nvt',
                    "entry_335933636": registration.comment};            
            else
                return { 
                    "entry_125932087": registration.selectedActivity.name,
                    "entry_2023678217": registration.firstName, 
                    "entry_1841105698": registration.lastName,
                    "entry_1286405048": registration.tel,
                    "entry_351041498": registration.email,
                    "entry_922331852": registration.postcode,
                    "entry_1995805459": registration.numberOfPersons,
                    "entry_1443470760": registration.hourDeparture,
                    "entry_335933636": registration.comment};
        },
        
        /*supportedBrowser:function(){
            var ie = (function(){

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
            
            if(ie!=undefined && ie <=9)
                return false;
            return true;
    },*/
        
        getActivities:function() {

            var defaultFormUrl = "https://docs.google.com/a/lacage.be/forms/d/1b8TYQf0ITtSpY4FuhC86jrfCPYWtMtOntIj78Thldqw/formResponse";
            var mBassadeurFormUrl = "https://docs.google.com/a/lacage.be/forms/d/1b8TYQf0ITtSpY4FuhC86jrfCPYWtMtOntIj78Thldqw/formResponse";
            
            var defaultRegistrationAllowed = false;
            var defaultRedirectUrl = "http://www.omdtervuren.be/omdtervuren";
            var mBassadeurRedirectUrl = "http://www.omdtervuren.be";
            
            var defaultDeptHours = ['10u', '11u', '12u', '14u', '15u', '16u', '17u']

            return [
                {   id : 0,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'Openstelling herenhuis Delacroix',
                    departureHours: [],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 1,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'Openstelling landhuis Little Castle',
                    departureHours: [],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 2,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'Openstelling Hof Hertoginnedal',
                    departureHours: ['11u', '12u', '16u', '17u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 3,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'Openstelling Cottage Steuts',
                    departureHours: [],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 4,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'Openstelling Hof Uilenkot',
                    departureHours: ['10u', '11u', '12u', '14u', '17u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 5,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'Openstelling Sint-Katharinakerk',
                    departureHours: ['10u', '11u', '12u', '14u', '15u', '16u', '17u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 6,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'De restauratie en uitbreiding van het Koninklijk Museum voor Midden-Afrika',
                    departureHours: ['16u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 7,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'De herbestemming van kazerne Lempereur',
                    departureHours: ['17u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 8,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'HOP-ON HOP-OFF TOUR',
                    departureHours: [],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                }
                ,
                {   id : 9,
                    registrationAllowed: true,
                    name: 'Word M-bassadeur van Tervuren!',
                    departureHours: [],
                    formUrl: mBassadeurFormUrl,
                    redirectUrl: mBassadeurRedirectUrl
                }
                ,
                {   id : 10,
                    registrationAllowed: true,
                    name: 'Paaseitjeswandeling Tervuren',
                    departureHours: [],
                    formUrl: mBassadeurFormUrl,
                    redirectUrl: mBassadeurRedirectUrl
                }
            ];
        },

        newRegistration:function(){

        }


    };
});

