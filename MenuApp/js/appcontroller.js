var ctrl = angular.module("CtrlModule", ["SvcModule"]);
ctrl.controller("MainController", function($scope,$location,$rootScope){
    console.log("Main Controller Registerd...");
    
    $scope.pageHeading = "<u>Digital Restaurant</u>";
    
    $scope.$on("$routeChangeSuccess",function(){
        
        console.log("Route Change Success "+$location.path());
        if($location.path() == "/logout"){
            $rootScope.isLogin = false;
        }
    });
    
     $scope.$on("$routeChangeStart",function(){
        
        console.log("Route start Success");
        
        if(!$rootScope.isLogin){
            if($location.path() == "/manage"){
                $location.path("/login");
            }
        }
    });
    
    
});

ctrl.controller("LoginController",function($scope,$location,$rootScope){
    
    $scope.doLogin = function(){
        
        if($scope.login.username == "admin"){
            $location.path("/manage");
            $rootScope.isLogin = true;
        }else{
            $rootScope.isLogin = false;
            $location.path("/error")
        }
    }
    
});

ctrl.controller("signupcontroller",function($scope){
    $scope.stateList = [ {"stateId": 1, "name":"TN"},
        {"stateId": 2 , "name":"KA"}];
})

ctrl.config(function(){
    console.log("Ctrl Config")
})
ctrl.run(function(){
    console.log("Ctrl Run")
})

ctrl.controller("MenuController",function($scope,MenuService,OrderService){
    
    $scope.currentIndex;
    
    $scope.currentId;
    
    $scope.itemList = MenuService.getAllMenuItems();
    
    $scope.addItem = function(menuitem){
        var orderedItem = {"name":menuitem.name,"price":menuitem.price,"quantity":1};
        OrderService.addOrder(orderedItem);
    }
    
    $scope.save = function(currentIndex){        
        MenuService.addNewItem($scope.newmenuitem,currentIndex);
        $scope.newmenuitem = {};
        $scope.currentIndex = null;
    }
    
    $scope.delete = function(index,id){
        MenuService.deleteItem(index,id);
    }
    
    $scope.populate = function(menuitem,currentIndex,id){        
        $scope.newmenuitem = angular.copy(menuitem);
        $scope.currentIndex = currentIndex;
        $scope.currentId = id;
    }
        
        
    
    
});

ctrl.controller("OrderController",function($scope, OrderService){
    
    $scope.myOrders = OrderService.getAllOrders();
    
    $scope.cancel = function(idx){
        
        OrderService.deleteOrder(idx);
    }
    
    $scope.totalAmount = function(){
        
        return OrderService.getTotalAmount();
    }
});

