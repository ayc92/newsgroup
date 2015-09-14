define(['react', 'reactRouter', 'jsx!components/App'], function(React, ReactRouter, App) {
    var initialize = function() {
        // React.render(
        //     React.createElement(Login),
        //     document.getElementById('content')
        // );

        React.render(
            React.createElement(App),
            document.body
        );
    };

    return {
        initialize: initialize
    };
});