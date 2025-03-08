import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "../Database";
import { isFaculty } from "../Account/reducer";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);// get the current user from the store
    const { enrollments } = db;

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
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

            )
            }

            <h2 id="wd-dashboard-published">Published Courses  ({courses.length})</h2> <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">

                    {courses.filter((course) =>
                        enrollments.some(
                            (enrollment) =>
                                enrollment.user === currentUser._id &&
                                enrollment.course === course._id
                        ))
                        .map((course) => (

                            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`}

                                        className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />

                                        <Card.Body className="card-body">
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name} </Card.Title>
                                            <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description} </Card.Text>
                                            <Button variant="primary">Go</Button>

                                            {isFaculty(currentUser) && (
                                                <>
                                                    <button onClick={(event) => {
                                                        event.preventDefault();// prevent the default behavior of the event
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

                                                </>)}

                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}

                    {/* <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to="/Kambaz/Courses/5610/Home"
                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">CS5610 React JS</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                        <Button variant="primary">Go</Button>

                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col> */}

                    {/* <div className="wd-dashboard-course">
                        <img src="/images/algorithm.jpg" width={200} />
                        <div>
                            <Link className="wd-dashboard-course-link"
                                to="/Kambaz/Courses/5800/Home"> CS5800 Advanced Algorithm </Link>
                            <p className="wd-dashboard-course-title">
                                Presents the mathematical techniques used for the design and analysis of computer algorithms.  </p>
                            <Link to="/Kambaz/Courses/5800/Home"> Go </Link>
                        </div>
                    </div> */}

                </Row>

            </div>
        </div >

    );
}