'use strict';

/* Services */

var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('Contact', ['$resource',
    function($resource) {
        return $resource(
            resourcePath + '/shanye/server/contact/index/:id', 
            {id: '@id'}
        );
    }
]);

