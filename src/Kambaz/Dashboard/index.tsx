import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { /* Form, Link, */ useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
/* import * as db from "../Database"; */
import { isFaculty } from "../Account/reducer";
import { toggleEnrollment, toggleShowAllCourses } from "./enrollmentReducer";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
        enrolling: boolean;
        setEnrolling: (enrolling: boolean) => void;
        updateEnrollment: (courseId: string, enrolled: boolean) => void;
    }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentReducer);
    const isStudent = currentUser?.role === "STUDENT";

    const handleCourseClick = (courseId: string) => {
        if (!isStudent || enrollments.includes(courseId)) {
            navigate(`/Kambaz/Courses/${courseId}/Home`);
        }
    };

    //remove?
    /*     const displayedCourses = isStudent && !showAllCourses
            ? courses.filter(course => enrollments.includes(course._id))
            : courses;
     */
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1> <hr />

            {/* Faculty Controls */}
            {isFaculty(currentUser) && (
                <>
                    <h5>NewCourse
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>Add</button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <FormControl as="textarea" value={course.description} rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                </>
            )}

            {/* Student Enrollment Controls */}
            {isStudent && (
                <div className="d-flex justify-content-end mb-3">
                    <Button
                        variant="primary"
                        onClick={() => dispatch(toggleShowAllCourses())}
                    >
                        {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
                    </Button>
                </div>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <div className="wd-dashboard-course-link text-decoration-none text-dark"
                                    onClick={() => handleCourseClick(course._id)}
                                    style={{ cursor: isStudent && !enrollments.includes(course._id) ? 'not-allowed' : 'pointer' }}>
                                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {enrolling && (
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(course._id, !course.enrolled);
                                                }} className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
                                            {course.name}
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description}
                                        </Card.Text>

                                        {/* Student Enrollment Button */}
                                        {isStudent && (
                                            <Button
                                                variant={enrollments.includes(course._id) ? "danger" : "success"}
                                                onClick={(/* e */) => {
                                                    /* e.stopPropagation(); */
                                                    dispatch(toggleEnrollment(course._id));
                                                }}
                                            >
                                                {enrollments.includes(course._id) ? "Unenroll" : "Enroll"}
                                            </Button>
                                        )}

                                        {/* Faculty Controls */}
                                        {isFaculty(currentUser) && (
                                            <>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>

                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}