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
                    "entry_24892910": 'addr nvt',
                    "entry_1354271491": 'city nvt',                    
                    "entry_1995805459": 'nvt',
                    "entry_1443470760": 'nvt',
                    "entry_335933636": registration.comment};    
            else
            {
                if(registration.selectedActivity.id == 10)
                    return { /* in het geval van registratie voor Paaseitjeswandeling zijn andere velden nodig*/
                        "entry_125932087": registration.selectedActivity.name,
                        "entry_2023678217": registration.firstName, 
                        "entry_1841105698": registration.lastName,
                        "entry_1286405048": registration.tel,
                        "entry_351041498": registration.email,
                        "entry_922331852": registration.postcode,
                        "entry_24892910": registration.address,
                        "entry_1354271491": registration.city,                        
                        "entry_1995805459": registration.numberOfPersons,
                        "entry_1443470760": registration.hourDeparture,
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
                        "entry_24892910": 'addr nvt',
                        "entry_1354271491": 'city nvt',                        
                        "entry_335933636": registration.comment};
            }
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
            /*Month numbers in javascript are zero based!!! */
            var defaultRegistrationAllowed = new Date()>=new Date(2015, 7, 3);
            var defaultRedirectUrl = "http://www.omdtervuren.be/#/activiteiten/2";
            var mBassadeurRedirectUrl = "http://www.omdtervuren.be";
            
            var defaultDeptHours = ['10u', '11u', '12u', '14u', '15u', '16u', '17u']

            return [
                {   id : 0,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'De kazerne Panquin',
                    departureHours: ['10u40', '11u40', '12u', '12u20', '13u20', '13u40', '14u20', '14u40', '15u20', '15u40', '16u', '16u20', '16u40', '17u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 1,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'De 18de eeuwse Kasteelstraat',
                    departureHours: ['17u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 2,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'De eerste sociale woonwijk van Tervuren',
                    departureHours: ['10u', '11u', '12u', '13u', '14u', '15u', '16u', '17u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
                {   id : 3,
                    registrationAllowed: defaultRegistrationAllowed,
                    name: 'Een geheel van vier cottages in de Hertogenweg',
                    departureHours: ['13u'],
                    formUrl: defaultFormUrl,
                    redirectUrl: defaultRedirectUrl
                },
               
                {   id : 9,
                    registrationAllowed: false,
                    name: 'Word M-bassadeur van Tervuren!',
                    departureHours: [],
                    formUrl: mBassadeurFormUrl,
                    redirectUrl: mBassadeurRedirectUrl
                }
                ,
                {   id : 10,
                    registrationAllowed: false,
                    name: 'Paaseitjeswandeling Tervuren',
                    departureHours: [],
                    formUrl: mBassadeurFormUrl,
                    redirectUrl: 'http://www.paaseitjeswandelingtervuren.be'
                }
            ];
        },

        newRegistration:function(){

        }


    };
});

