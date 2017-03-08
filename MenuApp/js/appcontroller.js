var ctrl = angular.module("CtrlModule", ["SvcModule"]);
ctrl.controller("MainController", function($scope){
    console.log("Main Controller Registerd...");
    
    $scope.pageHeading = "<u>Digital Restaurant</u>"
    
    
})
ctrl.config(function(){
    console.log("Ctrl Config")
})
ctrl.run(function(){
    console.log("Ctrl Run")
})

ctrl.controller("MenuController",function($scope,MenuService,OrderService){
    
    $scope.currentIndex;
    
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
    
    $scope.delete = function(index){
        MenuService.deleteItem(index);
    }
    
    $scope.populate = function(menuitem,currentIndex){        
        $scope.newmenuitem = angular.copy(menuitem);
        $scope.currentIndex = currentIndex;
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

