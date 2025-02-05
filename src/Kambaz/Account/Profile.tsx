import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {

    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <Col>
                <Form.Control id="wd-username" value="david" placeholder="username" /><br />
                Password:<br />
                <Form.Control id="wd-password" value="123" placeholder="password"
                    type="password" /><br />
                First Name:<br />
                <Form.Control id="wd-firstname" value="David" placeholder="First Name" /><br />
                Last Name:<br />
                <Form.Control id="wd-lastname" value="Xu" placeholder="Last Name" /><br />
                DOB:<br />
                <Form.Control id="wd-dob" value="2023-02-19" type="date" /><br />
                Email:<br />
                <Form.Control id="wd-email" value="Davidxu@google.com" type="email" /><br />
                Role:<br />
                <Form.Group className="mb-3" controlId="wd-group">
                    <select id="wd-role">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select><br />
                </Form.Group>

            </Col>

            <Link id="wd-signout-btn"
                to="/Kambaz/Account/Signin"
                className="btn btn-primary w-100 mb-2" style={{ backgroundColor: 'red', borderColor: 'red', color: 'white' }}>
                Sign Out </Link>
        </div>


    );

}