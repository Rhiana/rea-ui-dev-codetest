describe('addingProperty', function () {
		
	beforeEach(angular.mock.module('myApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

	describe('addProperty', function () {
		it('test', function () {
			var $scope = {};
			var controller = $controller('resultsCtrl', { $scope: $scope });
      $scope.addProperty();
			expect( $scope.test ).toEqual(5);
		});	
	});

});
