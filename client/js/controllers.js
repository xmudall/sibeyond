'use strict';

/* Controllers */

var myControllers = angular.module('myControllers', []);

myControllers.controller('BaseCtrl', ['$scope', '$location', '$element',
    function($scope, $location, $element) {
        $scope.resourcePath = resourcePath;
        $scope.tabact = 1;

        $scope.navTo = function(path) {
            $location.path(path);
        }
    }
]);

myControllers.controller('HomeCtrl', ['$scope', '$http',
    function($scope, $http) {
    }
]);

myControllers.controller('ContactsCtrl', ['$scope', 'Contact',
    function($scope, Contact) {
        Contact.query({}, function(contacts) {
            $scope.contacts = contacts;
        });
    }
]);

myControllers.controller('ContactDetailCtrl', ['$scope', 'Contact', '$routeParams',
    function($scope, Contact, $routeParams) {
        Contact.get({id:$routeParams.id}, function(contact) {
            $scope.contact = contact;
        });
    }
]);

myControllers.controller('ContactEditCtrl', ['$scope', 'Contact', '$routeParams',
    function($scope, Contact, $routeParams) {
        if (location.hash.indexOf('edit') > -1) {
            $scope.title = "修改个人信息";
            $scope.isNew = false;
            $scope.pswMatch = false; 
            $scope.contact = Contact.get({id:$routeParams.id}, function(contact) {
            });
        } else {
            $scope.title = "填写个人信息";
            $scope.isNew = true;
            $scope.pswMatch = false; 
            $scope.contact = new Contact();
        }

        $scope.submit = function() {

            if ( $scope.isNew && $scope.contact.password != $scope.passwordConfirm ) {
                $scope.pswMatch = true;
                $('body').animate({scrollTop:0},200);
                return;
            }

            // encode password
            $scope.contact.password = md5($scope.contact.password);

            $scope.contact.$save({}, function(data) {
                if ( !data ) {
                    $scope.errormsg = "网络不稳定，请稍后再试";
                } else if ( data.errormsg ) {
                    $scope.errormsg = data.errormsg;
                } else {
                    $scope.back();
                }
            });
        }

        $scope.isEnable = function() {
            if ($scope.isNew) {
                return $scope.contact.name && $scope.contact.phone && $scope.contact.password && $scope.passwordConfirm;
            } else {
                return $scope.contact.name && $scope.contact.phone && $scope.contact.password;
            }
        }

        $scope.back = function() {
            if ($scope.isNew) {
                $scope.navTo('/contacts/');
            } else {
                $scope.navTo('/contact/' + $routeParams.id);
            }
        }
    }
]);
