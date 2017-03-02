angular.module('dashboard').controller('homeController', ['$scope', 'webService', 'VisDataSet', 'translator', function ($scope, webService, VisDataSet, translator) {
    'use strict'

    var vm = $scope,
        ws = webService;
        //vis = VisDataSet;
    ws.getNodesList().then(function (response) {
        vm.list = response;
    })

    var data = translator.translate(vm);
    data = {
        nodes: new vis.DataSet(data.nodes),
        edges: new vis.DataSet(data.edges)
    };
    // create a network
    var container = document.getElementById('mynetwork');

    var nodeOptions = {

    }

    var edgeOptions = {
        arrows: {
            to: { enabled: true, scaleFactor: 1, type: 'arrow' }
        },
        color: {
            color: '#000000'
        },
    };

    var options = {
            physics: {
                enabled: false
            },
            edges: edgeOptions
        };

    var network = new vis.Network(container, data, options);
}]);