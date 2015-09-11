requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    },
    map: {
        'react': 'react-with-addons',
        'jquery': 'jquery-2.1.4'
    }
});

requirejs(['app/main']);