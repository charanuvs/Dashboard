angular.module('dashboard')
    .factory('translator', function () {
        'use strict'

        var nodes = [
            { id: 1, label: 's', fixed: true, x: 0, y: 0, shape: 'circle', color: { background: '#ffffff', border: '#000000' } },
            { id: 2, label: 'a', fixed: true, x: 150, y: 0, shape: 'box', color: { background: '#ffffff', border: '#000000' } },
            { id: 3, label: 'b', fixed: true, x: 300, y: 150, shape: 'circle', color: { background: '#ffffff', border: '#000000' } },
            { id: 4, label: 'c', fixed: true, x: 300, y: 0, shape: 'circle', color: { background: '#ffffff', border: '#000000' } },
            { id: 5, label: 'd', fixed: true, x: 450, y: 0, shape: 'square', size: 10, color: { background: '#ffffff', border: '#000000' } },
            { id: 6, label: 'e', fixed: true, x: 600, y: 0, shape: 'database', color: { background: '#ffffff', border: '#000000' } }
        ];

        var edges = [
            { from: 1, to: 2, label: 'x,y,z' },
            { from: 2, to: 4, label: 'y,z' },
            { from: 2, to: 3, label: 'x' },
            { from: 4, to: 3, label: 'y' },
            { from: 4, to: 5, label: 'z' },
            { from: 3, to: 5, label: 'x,y' },
            { from: 5, to: 6, label: 'x,y,z' }
        ];

        function translate(source) {
            var res = {};
            res = source;
            return {
                nodes: nodes,
                edges: edges
            };
        };

        return {
            translate: translate
        };
    });