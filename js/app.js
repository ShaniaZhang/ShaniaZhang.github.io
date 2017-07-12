/**
 *  Module
 *
 * Description
 */
angular.module('myApp', [])
    .controller('myAppCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.projectItems =[];
        //同步数据请求
        $http({
            method: 'get',
            url: 'json/projectItems.json'
        }).success(function(data) {
            $scope.projectItems = data;
        }).error(function(data) {
            console.log("错误！");
        });
    }]);
