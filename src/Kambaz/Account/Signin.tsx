import { Link } from "react-router-dom";

export default function Signin() {

    return (
        <div>
            <h3>Sign in</h3>
            username:
            <input placeholder="username" id="wd-username" />
            <br />
            password:
            <input placeholder="password" id="wd-password" type="password" />
            <br />
            <Link to="/Kambaz/Account/Profile"
                id="wd-signin-btn">Sign in</Link>
            <br />
            <Link to="/Kambaz/Account/Signup"
                id="wd-signup-link">Sign up</Link>

        </div>
    );
}