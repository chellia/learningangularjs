var s = angular.module("SvcModule",["FactModule"])

s.service("MenuService", function(MenuFactory){
    
    this.getAllMenuItems = function(){
        
        return MenuFactory.getMenuItems();
    }
    
    this.addNewItem = function(item,index){
       MenuFactory.addNewItem(item,index);
        
    }
    
    this.deleteItem = function(index,id){
        MenuFactory.deleteItem(index,id);
    }
})

s.service("OrderService",function(OrderFactory){
    
    this.getAllOrders = function(){
        return OrderFactory.getOrderItems();
    }
    
    this.addOrder = function(item){
        
        var flag = false;
        angular.forEach(this.getAllOrders(),function(e){
            if(e.name == item.name){
                e.quantity = e.quantity + 1;
                flag = true;
            }
        })
        if(!flag){           
             OrderFactory.addNewItem(item);
        }
            
       
    }
    
    this.deleteOrder = function(idx){
        OrderFactory.deleteItem(idx);
    }
    
    this.getTotalAmount = function(){
        var sum = 0;
        
        angular.forEach(this.getAllOrders(),function(ele){
            sum += (ele.price * ele.quantity);
        })        
        return sum;
    }
})