/**
 * Created by Gary on 10/20/2014.
 */
angular.module('d3App')
    .directive('donutChart', donutChart);

function donutChart(){
    function link(scope, element, attr){
        var color = d3.scale.category10();
        var data = scope.data;
        var width = 300;
        var height = 300;
        var min = Math.min(width, height);
        var svg = d3.select(element[0]).append('svg');
        var pie = d3.layout.pie().sort(null);

        var arc = d3.svg.arc()
            .outerRadius(min / 2 * 0.9)
            .innerRadius(min / 2 * 0.5);

        svg.attr({width: width, height:height});
        var g = svg.append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        var arcs = g.selectAll('path').data(pie(data))
            .enter().append('path')
            .style('stroke', 'white')
            .attr('fill', function(d,i){return color(i)});

        scope.$watch('data', function (){
            arcs.data(pie(data)).attr('d', arc);
        },true);


    }

    return {
        link: link,
        restrict: 'E',
        scope: {data : '='}
    }
}