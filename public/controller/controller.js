function AppCtrl($scope,$http){
    var ref = function(){
        $http.get('/contact').success(function(res){
            $scope.contact = res;
            $scope.ncontact = {};
        });
    }
   
   ref();

    $scope.addContact = function(){
        $http.post('/contact',$scope.ncontact).success(function(res){
            ref();
        });
    };

    $scope.remove = function(id){
        $http.delete('/contact/' + id).success(function(){
            ref();
        });
    };
    
    $scope.edit = function(id){
         $http.get('/contact/' + id).success(function(res){
            $scope.ncontact = res[0];
        });
    }

    $scope.update = function(id){
          $http.post('/contact/' + id , $scope.ncontact).success(function(res){
            ref();
        });
    }




}

