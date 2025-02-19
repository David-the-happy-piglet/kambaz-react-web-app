import { Button, Card, Col, Row } from "react-bootstrap";
import * as db from "../Database";


import { Link } from "react-router-dom";

export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses  ({courses.length})</h2> <hr />

            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">

                    {courses.map((course) => (

                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}

                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />

                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name} </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description} </Card.Text>
                                        <Button variant="primary">Go</Button>

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