define(['react', 'reactRouter', 'jsx!components/Router'], function(React, ReactRouter, Router) {
    var initialize = function() {
        // React.render(
        //     React.createElement(Login),
        //     document.getElementById('content')
        // );

        React.render(
            React.createElement(Router),
            document.getElementById('content')
        );
    };

    return {
        initialize: initialize
    };
});