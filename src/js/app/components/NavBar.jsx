define(['react'], function(React) {
    var NavBar = React.createClass({
        render: function() {
            return (
                <div className="navbar">
                    <div className="navbar-left">
                        LOGO HERE
                    </div>

                    <div className="navbar-right">
                        <div className="profile">
                            <a>Profile</a>
                        </div>
                        <div className="logout">
                            <a>Log Out</a>
                        </div>
                    </div>
                </div>
            );
        }
    });

    return NavBar;
});