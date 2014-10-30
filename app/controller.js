eyasBlog.controller('PostListCtrl', ['$scope', '$http', 'siteConfig',
    function($scope, $http, siteConfig) {
        $scope.conf = siteConfig;
        if(localStorage.getItem('posts') == null){
            $http.get(siteConfig.dataRootUrl).success(function(data) {
                for(var i = 0;i<data.length;i++){
                    data[i].post_content = htmldecode(data[i].post_content);
                    data[i].post_abstract = data[i].post_content.substr(0,200);
                }
                $scope.posts = data;
                localStorage.setItem('posts', JSON.stringify(data));
            });
        }else{
            $scope.posts = JSON.parse(localStorage.getItem('posts'))
            
        }
    }
]);
eyasBlog.controller('PostDetailCtrl',['$scope','$http','$stateParams','siteConfig',
    function($scope,$http,$stateParams,siteConfig){
        if(localStorage.getItem('posts-'+$stateParams.pid) == null){
            $http.get(siteConfig.dataRootUrl+"&qv[p]="+$stateParams.pid).success(function(data){
                data[0].post_content = htmldecode(data[0].post_content);
                $scope.post = data;
                localStorage.setItem('post-'+$stateParams.pid, JSON.stringify(data));
            });
        }else{
            $scope.post = JSON.parse(localStorage.getItem('posts'))
        }
        $scope.orderList = 'post_date';
}]);
eyasBlog.controller('HeaderCtrl', ['$scope','siteConfig',
    function($scope,siteConfig) {
        $scope.golbal = siteConfig;
        console.log(siteConfig);
    }
]);

