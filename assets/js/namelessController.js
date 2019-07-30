angular.module('Nameless',['ngMaterial'])
.controller("justAController",function($scope,$http){
    $scope.getUsers = function() {
        var url = "https://m3kht1.github.io/api/getUsers.php";
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        $http.get(url,config).then(
            function(res){
                console.log(res)
            }
        )
    }
});
