describe('CaughtController', function () {
	
  var $controller;
  beforeEach(module('pokedexApp'));
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

		
  describe('sort', function(){
    it('should the reverse var swap between true or false in calls to the function sort', function(){
      var $scope = {};
      var controller = $controller('CaughtController', {$scope: $scope});
      $scope.reverse = false;
      $scope.sort();
      expect( $scope.reverse ).toBe(true);
      $scope.sort();
      expect( $scope.reverse ).toBe(false);
      $scope.sort();
      expect( $scope.reverse ).toBe(true);			
		});
	});
});