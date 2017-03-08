angular.module("myApp",[]).controller("testcontroller",function($scope){
    $scope.counter = 0;
    $scope.incrementCounter = function(){
        $scope.counter++;
    }
})

