angular.module('Nameless',['ngMaterial'])
.controller("justAController",function($scope,$http,$mdSidenav){
    $scope.currentUser ;
    $scope.items ;

    $scope.getUsers = function() {
        var url = "localhost:8000/api/getUsers.php";
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        var data = {
            'action':'queen'
        }
        $http.get(url,data,config).then(
            function (response) {
                $scope.items = response.data;
                console.log(response.data);
			},
			function (response) {
				console.log(response.data);
			}
        )
    },
    $scope.getUsers();
    // $scope.goToUser = function(index){
    //     $scope.currentUser = $scope.items[index];
    //     $scope.sidenav = buildToggler('sidenav');
    //     console.log(index);
    // }
    // function buildToggler(navID) {
    //     return function () {
    //         $mdSidenav(navID).toggle();
    //     };
    // };
    //
    // $scope.close_sidenav = function (navID) {
    //     $mdSidenav(navID).close();
    // };
    //
    // $scope.close = function () {
    //     $mdSidenav('sidenav').close();
    // }
});
