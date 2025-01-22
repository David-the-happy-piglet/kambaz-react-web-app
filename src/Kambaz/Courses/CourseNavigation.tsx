import { Link } from "react-router-dom";
export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation">
            <Link to="/Kambaz/Courses/5610/Home">Home</Link><br />
            <Link to="/Kambaz/Courses/5610/Modules">Modules</Link><br />
            <a href="https://piazza.com/northeastern"
                id="wd-piazza-link" target="_blank">Piazza</a><br />
            <Link to="/Kambaz/Courses/5610/Zoom">Zoom</Link><br />
            <Link to="/Kambaz/Courses/5610/Assignments">Assignments</Link><br />
            <Link to="/Kambaz/Courses/5610/Quizzes">Quizzes</Link><br />
            <Link to="/Kambaz/Courses/5610/Grades">Grades</Link><br />
            <Link to="/Kambaz/Courses/5610/People">People</Link><br />
        </div>

    );
}
