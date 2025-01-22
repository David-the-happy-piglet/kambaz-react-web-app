import { Link } from "react-router-dom";
export default function KambazNavigation() {
    return (
        <div id="wd-kambaz-navigation">
            <a href="https://www.northeastern.edu/"
                id="wd-neu-link" target="_blank">Northeastern</a><br />
            <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br />
            <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br />
            <Link to="/Kambaz/Courses" id="wd-courses-link">Courses</Link><br />
            <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link><br />
            <Link to="/Kambaz/Mail" id="wd-mail-link">Mail</Link><br />
            <Link to="/Labs" id="wd-labs-link">Labs</Link><br />
        </div>
    );
}
