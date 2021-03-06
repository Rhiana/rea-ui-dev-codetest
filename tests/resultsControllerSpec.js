describe('addingProperty', function () {
		
	beforeEach(angular.mock.module('myApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('addProperty', function () {
		it('When adding a property it should be removed from results and added to saved', function () {
			var $scope = {};
			var controller = $controller('resultsCtrl', { $scope: $scope });
      $scope.addProperty(1);
      $scope.results = $scope.getTotalResults();
      $scope.saved   = $scope.getTotalSaved();
			expect( $scope.results ).toEqual(2);
      expect( $scope.saved ).toEqual(2);
		});	
	});

  describe('removeProperty', function () {
    it('When removing a property it should be removed from saved and added to results', function () {
      var $scope = {};
      var controller = $controller('resultsCtrl', { $scope: $scope });
      $scope.removeProperty(0);
      $scope.results = $scope.getTotalResults();
      $scope.saved   = $scope.getTotalSaved();
      expect( $scope.results ).toEqual(4);
      expect( $scope.saved ).toEqual(0);
    }); 
  });

});
