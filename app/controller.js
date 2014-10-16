eyasBlog.controller('PostListCtrl', ['$scope', '$http', 'siteConfig',
    function($scope, $http, siteConfig) {
        $scope.name = 'yuesong';
        $scope.conf = siteConfig;
        // $http({
        //     url: siteConfig.dataRootUrl,
        //     type: 'GET',
        //     dataType: 'jsonp'
        // }).success(function(data) {
        //     $scope.posts = data
        // });
        $http.get(siteConfig.dataRootUrl).success(function(data) {
            $scope.posts = data;
            localStorage.setItem('posts', JSON.stringify(data));
            console.log(JSON.parse(localStorage.getItem('posts')));
        });

    }
]);
eyasBlog.controller('HeaderCtrl', ['$scope',
    function($scope) {
        $scope.name = 'yuesong';
    }
]);
