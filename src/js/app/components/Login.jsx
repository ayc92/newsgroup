define(['react', 'parse'], function(React, Parse) {
    var LoginForm = React.createClass({
        getInitialState: function () {
            return { email: '', password: '' };
        },

        onChange: function (e) {
            var input = e.target;
            if (input.getAttribute('type') === 'password')
                this.setState({ password: input.value });
            else
                this.setState({ email: input.value });
        },

        login: function () {
            Parse.User.logIn(this.state.email, this.state.password, {
                success: function(user) {
                    // Do stuff after successful login.
                    console.log('login successful');
                },
                error: function(user, error) {
                    // The login failed. Check error to see why.
                    console.log('login failed: ' + error);
                }
            });
        },

        render: function () {
            return (
                <div className="login container">
                    <form className="login">
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.onChange} />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                        <a className="submit" onClick={this.login}>
                            Login
                        </a>
                    </form>
                </div>
            );
        }
    });

    return LoginForm;
});