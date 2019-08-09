angular.module('Nameless',['ngMaterial'])
.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])
.controller("justAController",function($scope,$http,$mdSidenav){
    $scope.currentUser ;
    $scope.items = [
            {
                "name": "Freddie",
                "surname": "Mercury",
                "notes": "Lead Vocal",
                "fromTo": "1970–1991",
                "bio": "biography will be here"
            },
            {
                "name": "John",
                "surname": "Deacon",
                "notes": "Bass Guitar",
                "fromTo": "1971–1997",
                "bio": "biography will be here"
            },
            {
                "name": "Brian",
                "surname": "May",
                "notes": "Lead Guitar and Vocal",
                "fromTo": "1970-present",
                "bio": "biography will be here"
            },
            {
                "name": "Roger",
                "surname": "Taylor",
                "notes": "Drum and Vocal",
                "fromTo": "1970-present",
                "bio": "biography will be here"
            }
        ];

   /* $scope.getUsers = function() {
        var url = "localhost:8000/api/getUsers.php";
        var config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
        var data = {
            action:'queen'
        };
        /* $http.post('localhost:8080/api/getUsers.php',config)
            .then(function (response) {
                $scope.items = response.data;
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            })
        */

   // },
    //$scope.getUsers();
     $scope.goToUser = function(item){
        $scope.currentUser = item;
        $mdSidenav("sidenav").toggle();
        // buildToggler('sidenav');
        console.log($scope.currentUser);
    }
    function buildToggler(navID) {
        return function () {
            $mdSidenav(navID).toggle();
        };
    };

    $scope.close_sidenav = function (navID) {
        $mdSidenav(navID).close();
    };

    $scope.close = function () {
        $mdSidenav('sidenav').close();
    }
});
