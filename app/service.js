eyasBlog.constant('baseConfig', {
    siteName: 'Eyas Life',
    siteUrl: 'http://eyaslife.com/',
    categorys: [{
        id: 1,
        name: 'PHP'
    }, {
        id: 2,
        name: 'Drupal'
    }, {
        id: 3,
        name: 'wordpress'
    }, {
        id: 4,
        name: '前端'
    }, {
        id: 5,
        name: '服务器'
    }, {
        id: 6,
        name: '生活'
    }]
});
eyasBlog.factory('siteConfig', ['$http', 'baseConfig',
    function($http, baseConfig) {
        var data = [];
        data = baseConfig;
        data.dataRootUrl = baseConfig.siteUrl + "webservice/get_posts/?post_type=post&qv[orderby]=date&qv[order]=desc";
        data.cates = baseConfig.categorys;
        return data;
    }
]);
eyasBlog.factory('getPosts', ['$http', 'siteConfig', 'cid',
    function($http, siteConfig, cid) {
        $http.get(data.dataRootUrl + '&qv[cat]=' + cid).success(function(data) {
            return data;
        });
    }
])
eyasBlog.factory('getPost', ['$http', 'siteConfig', 'pid',
    function($http, siteConfig, pid) {
        $http.get(data.dataRootUrl + '&qv[p]=' + pid).success(function(data) {
            return data;
        });
    }
])
