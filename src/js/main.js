require.config({
    baseUrl: 'js/',

    paths: {
        components: 'app/components',
        react: 'libs/react-with-addons',
        jquery: 'libs/jquery-2.1.4',
        JSXTransformer: 'libs/JSXTransformer',
        jsx: 'libs/require-jsx',
        text: 'libs/require-text'
    },

    jsx: {
        fileExtension: '.jsx'
    }
});

require(['app/app'], function(App) {
    App.initialize();
});