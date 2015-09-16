require.config({
    baseUrl: 'js/',

    shim: {
        parse: {
            deps: ['jquery', 'lodash'],
            exports: 'Parse'
        },
        reactRouter: {
            deps: ['react'],
            exports: 'ReactRouter'
        }
    },

    paths: {
        components: 'app/components',
        pages: 'app/pages',
        react: 'libs/react-with-addons',
        jquery: 'libs/jquery-2.1.4',
        JSXTransformer: 'libs/JSXTransformer',
        jsx: 'libs/require-jsx',
        text: 'libs/require-text',
        parse: 'libs/parse-1.6.0',
        lodash: 'libs/lodash',
        reactRouter: 'libs/ReactRouter',
        radium: 'libs/radium'
    },

    jsx: {
        fileExtension: '.jsx'
    }
});

require(['app/app', 'parse'], function(App, Parse) {
    App.initialize();
    Parse.initialize("IqAUe1un4WXYJx7fLlXPX66NJZFcvV2vihCLfb0a", "I10AAdaEo7O4sAaVH1asYztogf9ncENMlFwNe1CB");
});