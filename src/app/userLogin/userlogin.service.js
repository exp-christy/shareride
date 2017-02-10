(function() {
'use strict';

    angular
        .module('app')
        .factory('sample', Service);

    function Service(dependency1) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();