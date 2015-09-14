define(['react',
        'reactRouter',
        'jsx!components/Login',
        'jsx!components/Dashboard'], function (React, ReactRouter, Login, Dashboard) {

    var IndexRoute = ReactRouter.IndexRoute;
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;

    var App = React.createClass({
        render: function () {
            return (
                <div id="content">
                    {this.props.children}
                </div>
            );
        }
    });

    var AppRouter = React.createClass({
        render: function () {
            return (
                <Router>
                    <Route path="/" component={App}>
                        <IndexRoute component={Login} />
                        <Route path="dashboard" component={Dashboard}/>
                    </Route>
                </Router>
            );
        }
    });

    return AppRouter;
});