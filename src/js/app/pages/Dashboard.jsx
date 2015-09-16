define(['react', 'jsx!components/NavBar'], function(React, NavBar) {
    var Dashboard = React.createClass({
        render: function () {
            return (
                <NavBar />
            );
        }
    });

    return Dashboard;
});