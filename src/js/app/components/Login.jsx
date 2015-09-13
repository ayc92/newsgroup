define(['react'], function(React) {
    var LoginForm = React.createClass({
        render: function() {
            return (
                <form className="login">
                    <input type="text"/>
                    <input type="password"/>
                </form>
            );
        }
    });

    var LoginContainer = React.createClass({
        render: function() {
            return (
                <div className="login container">
                    <LoginForm/>
                </div>
            );
        }
    })

    return LoginContainer;
});