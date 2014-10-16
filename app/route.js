eyasBlog.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/posts');
    $stateProvider
        .state('posts', {
            url: '/posts',
            views: {
                '': {
                    templateUrl: 'tpls/post-list.html',
                    controller: 'PostListCtrl'
                },
                'home-header@posts': {
                    templateUrl: 'tpls/home-header.html',
                    controller: 'HeaderCtrl'
                }
            },
        })
        .state('single', {
            url: '/posts/:pid',
            views: {
                '': {
                    templateUrl: 'tpls/post-single.html'
                },
                'single-header@single': {
                    templateUrl: 'tpls/single-header.html'
                }
            }
        })
});
