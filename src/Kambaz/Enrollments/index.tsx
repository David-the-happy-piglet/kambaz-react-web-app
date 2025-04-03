import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Enrollment, findEnrollmentsByUser, toggleEnrollment } from "./client";
import { findCourses } from "../Courses/client";

export default function Enrollments() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            if (currentUser?._id) {
                const [enrollmentsData, coursesData] = await Promise.all([
                    findEnrollmentsByUser(currentUser._id),
                    findCourses()
                ]);
                setEnrollments(enrollmentsData);
                setCourses(coursesData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentUser?._id]);

    const handleToggleEnrollment = async (courseId: string) => {
        try {
            if (currentUser?._id) {
                const updatedEnrollment = await toggleEnrollment(currentUser._id, courseId);
                setEnrollments(enrollments.map(e =>
                    e.course === courseId ? updatedEnrollment : e
                ));
            }
        } catch (error) {
            console.error("Error toggling enrollment:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>My Enrollments</h2>
            <div className="row">
                {courses.map(course => {
                    const enrollment = enrollments.find(e => e.course === course._id);
                    const isEnrolled = enrollment?.enrolled || false;

                    return (
                        <div key={course._id} className="col-md-4 mb-4">
                            <Card>
                                <Card.Header>
                                    <Card.Title>{course.name}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>{course.description}</Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Number: {course.number}</ListGroup.Item>
                                        <ListGroup.Item>Start Date: {course.startDate}</ListGroup.Item>
                                        <ListGroup.Item>End Date: {course.endDate}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    <Button
                                        variant={isEnrolled ? "danger" : "success"}
                                        onClick={() => handleToggleEnrollment(course._id)}
                                    >
                                        {isEnrolled ? "Unenroll" : "Enroll"}
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
} 