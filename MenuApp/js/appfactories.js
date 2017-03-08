var f = angular.module("FactModule",["ngResource"]);

f.factory("MenuFactory",function($resource){
    
    var menuItems ;
    
    var menuResource = $resource("http://localhost:2403/menuitems/",{"id":"@mid"});
    return {        
        getMenuItems: function(){
            menuItems = menuResource.query();
            return menuItems;
        },
        addNewItem: function(item,index){
            
            if(index != null)
                {
                     menuResource.save(item,function(data){
                       console.log("Update Success"); 
                       menuItems[index] = item;
                    },
                    function(err){
                        console.log("Save Error",err);
                    }
                                     );
                    
                    
                }else{
                    menuResource.save(item,function(data){
                       console.log("Save Success"); 
                       menuItems.push(data);
                    },
                    function(err){
                        console.log("Save Error",err);
                    }
                                     );                    
                }
            
        },
        deleteItem: function(index,id){
            menuResource.delete({"id":id},function(){
                menuItems.splice(index,1);
            },function(){
                
            });
            
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