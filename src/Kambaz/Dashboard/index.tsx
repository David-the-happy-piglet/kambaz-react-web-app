import { Link } from "react-router-dom";

export default function Dashboard() {

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (2)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/5610/Home"> CS5610 Web Dev </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer </p>
                        <Link to="/Kambaz/Courses/5610/Home"> Go </Link>
                    </div>
                </div>

                <hr />


                <div className="wd-dashboard-course">
                    <img src="/images/algorithm.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kambaz/Courses/5800/Home"> CS5800 Advanced Algorithm </Link>
                        <p className="wd-dashboard-course-title">
                            Presents the mathematical techniques used for the design and analysis of computer algorithms.  </p>
                        <Link to="/Kambaz/Courses/5800/Home"> Go </Link>
                    </div>
                </div>

            </div>
        </div >

    );
}