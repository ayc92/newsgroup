define(['react', 'jsx!components/Login'], function(React, Login) {
    var initialize = function() {
        React.render(
            React.createElement(Login),
            document.getElementById('content')
        );
    };

    return {
        initialize: initialize
    };
});