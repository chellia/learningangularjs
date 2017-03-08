var m = angular.module("myDirectiveApp",[]);

m.directive("myDiv",function(){
    return {
        restrict:"E",
        template:"this is my first custom directive"
    }
});


m.directive("hello",function(){
    return {
        restrict:"A",
        link: function(s,e,a){
            e.text("Hello Custom Directive "+a.orgname);
        }
    }
})

m.directive("namer",function(){
    return {
        restrict:"A",
        template:"{{fullName}}",
        link: function(s,e,a){
            s.fullName = (a.first + " " + a.last);
        },
        scope:true
    }
})

m.directive("cnamer",function(){
    return {
        restrict:"C",
        template:"{{fullName}}",
        link: function(s,e,a){
            s.fullName = (a.first + " " + a.last);
        },scope:true
    }
})

m.directive("myName",function(){
    return {
        restrict:"E",
        template:"{{fullName}}",
        link: function(s,e,a){
            s.fullName = (a.first + " " + a.last);
        },scope:true
    }
});