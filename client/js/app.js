'use strict';

/* App Module */

var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers',
    'myFilters',
    'myServices',
    'myDirective',
]);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        when('/services', {
            templateUrl: 'partials/services.html',
            controller: 'HomeCtrl'
        }).
        when('/teachers', {
            templateUrl: 'partials/teachers.html',
        }).
        when('/cases', {
            templateUrl: 'partials/cases.html',
        }).
        when('/aboutus', {
            templateUrl: 'partials/aboutus.html',
        }).
        when('/whoarewe', {
            templateUrl: 'partials/whoarewe.html',
        }).
        when('/joinus', {
            templateUrl: 'partials/joinus.html',
        }).
        when('/product', {
            templateUrl: 'partials/product.html',
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);

// global constants
var context = {};
var resourcePath = "http://localhost";

// global functions
function getRealPath(path) {
    return resourcePath + path;
}

function back() {
    backservice.onBackPressed();
}

function calcTotalHeight(wrap) {
    var children = wrap.children();
    var height = 0;
    for (var i = 0; i < children.length; i++) {
        var item = $(children[i]);
        var pos = item.css('position');
        if (pos != 'absolute' && pos != 'fixed') {
            height += item.outerHeight(true);
        }
    }
    return height;
}

function calcTotalWidth(wrap) {
    var children = wrap.children();
    var width = 0;
    for (var i = 0; i < children.length; i++) {
        var item = $(children[i]);
        var pos = item.css('position');
        if (pos != 'absolute' && pos != 'fixed') {
            width += item.outerWidth(true);
        }
    }
    return width;
}
