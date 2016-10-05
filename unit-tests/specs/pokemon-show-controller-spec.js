describe('PokemonShowController', function () {

  var $controller;
  beforeEach(module('pokedexApp'));
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

		
  describe('Pad0', function(){
    it('should fill with 0 up to 3 digits and put # in the start of the num', function(){
      var $scope = {};
      var controller = $controller('PokemonShowController', {$scope: $scope});

      var res = $scope.pad0(3);
      expect(res).toEqual('#003');
      var res = $scope.pad0(17);
      expect(res).toEqual('#017');
      var res = $scope.pad0(151);
      expect(res).toEqual('#151');
    });
  });
});