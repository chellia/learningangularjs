var f = angular.module("FactModule",[]);

f.factory("MenuFactory",function(){
    
    var menuItems ;
    return {        
        getMenuItems: function(){
            return menuItems;
        },
        addNewItem: function(item,index){
            if(index != null)
                {
                    menuItems[index] = item;
                }else{
                    menuItems.push(item);
                }
            
        },
        deleteItem: function(id){
            menuItems.splice(id,1);
        }
        
    }
})

f.factory("OrderFactory",function(){
    
    var orderItems = [];
    
    return {        
        getOrderItems: function(){
            return orderItems;
        },
        addNewItem: function(item){
            orderItems.push(item);
        },
        deleteItem: function(index){
         orderItems.splice(index,1);
       }
    }
})