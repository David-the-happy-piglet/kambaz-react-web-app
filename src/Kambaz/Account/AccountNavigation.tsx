import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "active" : "");

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">

            {links.map((link) => (
                <Link key={link}
                    to={`/Kambaz/Account/${link}`}
                    id={`wd-account-${link.toLowerCase()}-link`}
                    className={`list-group-item list-group-item-action border border-0 ${pathname.includes(link) ? "active" : ""}`}>
                    {link} </Link>))}

            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}

            {/* <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link" className="list-group-item active border border-0"> Signin  </Link>
            <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link" className="list-group-item active border border-0"> Signup  </Link>
            <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link" className="list-group-item active border border-0"> Profile </Link> */}
        </div>
    );
}
