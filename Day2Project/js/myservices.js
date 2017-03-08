var myModule = angular.module("serviceApp", []);

myModule.controller("ServicesController",function($scope, appTitle, myFactory, EmpFactory,InstitueService,myProvider){
    $scope.val = appTitle;
    $scope.fact = myFactory;
    EmpFactory.setEmpName("Gopi Krishnan Chellaiah");
    $scope.ename = EmpFactory.getEmpName();
    $scope.serv = InstitueService;
    $scope.serv.setInstituteName("IntSol Institute")
    $scope.institueName = $scope.serv.getInstitueName();
    $scope.prov = myProvider;
   // myProvider.setProviderName("hi");
});

myModule.value("appTitle","My Angular World");

myModule.factory("myFactory",function(appTitle){
    return "this is true factory " + appTitle;
});

myModule.factory("EmpFactory",function(){
    
    var ename = "";
    
    return {
        getEmpName: function(){
            return ename;
        },
        setEmpName: function(name){
            ename = name;
        }
    }
})

myModule.service("InstitueService",function(){
    var instituteName = "IntSol";
    this.getInstitueName = function(){
        return instituteName;
    }
    this.setInstituteName = function(name){
       instituteName = name;
    }
})

myModule.config(function(myProviderProvider,APP_NAME){
    console.log("My Module Configuration in progress");
    myProviderProvider.setProviderName(APP_NAME)
})
myModule.run(function(InstitueService){
    console.log("My Module Running...")
})

myModule.provider("myProvider",function(){
    console.log("This is my provider..")
    var providerName = "helloProvider";
    this.setProviderName = function(name){
        providerName = name;
    }
    
    this.$get = function(){
        console.log("Run time info");
        return providerName;
    }
});

myModule.constant("APP_NAME","ServiceOfAngular");