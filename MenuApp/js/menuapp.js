var app = angular.module("menuApp", ["CtrlModule",'ngSanitize',"ngRoute"]);
app.config(function($routeProvider){
    console.log("Menu Config");
    $routeProvider.when("/",{
        template: "Welcom To Digital Restaurant"
    });
    $routeProvider.when("/menucard",{
        templateUrl:"/views/menucard.html"});
    $routeProvider.when("/manage",{
        templateUrl:"/views/manage.html",
        controller:"MenuController"});
    $routeProvider.otherwise({template:"Nope"})
})
app.run(function(){
    console.log("Running");
})

app.filter("truncate",function(){
    return function(input,param){
        var result = (input.length > param)?input.substr(0,param)+"...":input;
        return result;
    }
})