angular.module('dashboard')
    .factory('webService', ['$http', '$q', function ($http, $q) {
        'use strict'

        var deferred = $q.defer();
        
        function getNodesList() {
            deferred.resolve(data);
            return deferred.promise;
        }
        var data = [{
                        S: {

                            In: ['x', 'y', 'z'],
                            Out: ['x', 'y', 'z'],
                            Dest: ['A']
                        }
                    }, {
                        A: {
                            In: ['x', 'y', 'z'],
                            Out: ['x', 'y', 'z'],
                            Source: ['S'],
                            Dest: ['B', 'C']
                        }
                    }, {
                        B: {
                            In: ['y', 'z'],
                            Out: ['y', 'z'],
                            Source: ['A'],
                            Dest: ['C', 'D']
                        }
                    }, {
                        C: {
                            In: ['x', 'y'],
                            Out: ['x', 'y'],
                            Source: ['A', 'B'],
                            Dest: ['D']
                        }
                    }, {
                        D: {
                            In: ['x', 'y', 'z'],
                            Out: ['x', 'y', 'z'],
                            Source: ['B', 'C'],
                            Dest: ['E']
                        }
                    }, {
                        E: {
                            In: ['x', 'y', 'z'],
                            Out: ['x', 'y', 'z'],
                            Source: ['D']
                        }
                    }];

        return {
            getNodesList: getNodesList
        }
}]);