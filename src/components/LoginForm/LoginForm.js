import React, {Component} from 'react';


export default class LoginForm extends Component {
    render() {
        return (
            <div className="loginbox">
                <form className="loginForm" action="" method="post">
                    <h3>Login Form</h3>
                    <fieldset>
                        <input placeholder="Username" type="text"  name="username" required  />
                        <input placeholder="Password" type="password" name="password" required />
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}