var app = angular.module("menuApp", ["CtrlModule",'ngSanitize',"ngRoute","ngMessages"]);
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
    $routeProvider.when("/login",{
        templateUrl:"/views/login.html",
        controller:"LoginController"});
    
    $routeProvider.when("/signup",{
        templateUrl:"/views/signup.html",
        controller:"signupcontroller"});
    
    $routeProvider.when("/error",{
        template:"<h1>Invalid Credentials</h1>"
    });
    
    $routeProvider.when("/logout",{
        template:"<h3>Successful Logout</h3>",
        controller:"LoginController"});
    
    $routeProvider.otherwise({template:"Nope"})
})
app.run(function($rootScope){
    console.log("Running");
    $rootScope.isLogin = false;
})

app.filter("truncate",function(){
    return function(input,param){
        var result = (input.length > param)?input.substr(0,param)+"...":input;
        return result;
    }
})