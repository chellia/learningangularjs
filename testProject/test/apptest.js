describe("My Suite",function(){
    
    var scope;
    
    beforeEach(angular.mock.module("myApp"));
    
    beforeEach(inject(function($controller, $rootScope){
        
        scope = $rootScope.$new();
        $controller("testcontroller",{$scope:scope})
        
    }))
    
    it("increment test",function(){
        expect(scope.counter).toEqual(0);
    })
})