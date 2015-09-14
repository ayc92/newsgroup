define(['react', 'reactRouter', 'jsx!components/Login'], function (React, ReactRouter, Login) {
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;

    var AppRouter = React.createClass({
        render: function () {
            return (
                <Router>
                    <Route path="/" component={Login}/>
                </Router>
            );
        }
    });

    return AppRouter;
});