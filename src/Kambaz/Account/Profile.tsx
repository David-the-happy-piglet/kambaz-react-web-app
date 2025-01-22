import { Link } from "react-router-dom";

export default function Profile() {

    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            Username:<br />
            <input id="wd-username" value="david" placeholder="username" /><br />
            Password:<br />
            <input id="wd-password" value="123" placeholder="password"
                type="password" /><br />
            First Name:<br />
            <input id="wd-firstname" value="David" placeholder="First Name" /><br />
            Last Name:<br />
            <input id="wd-lastname" value="Xu" placeholder="Last Name" /><br />
            DOB:<br />
            <input id="wd-dob" value="2023-02-19" type="date" /><br />
            Email:<br />
            <input id="wd-email" value="Davidxu@google.com" type="email" /><br />
            Role:<br />
            <select id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select><br />
            <br />
            <Link to="/Kambaz/Account/Signin" >Sign out</Link>
        </div>

    );

}