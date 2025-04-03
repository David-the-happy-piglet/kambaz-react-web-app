import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, ListGroup, Row, Col, Alert } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Assignment, findAssignmentsForCourse, deleteAssignment } from "./client";

export default function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

    const fetchAssignments = async () => {
        if (!cid) {
            setError("No course selected");
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const courseAssignments = await findAssignmentsForCourse(cid);
            setAssignments(courseAssignments || []);
        } catch (err: any) {
            console.error("Error fetching assignments:", err);
            setError(`Failed to load assignments: ${err.message || 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAssignments();
    }, [cid]);

    const handleDelete = (assignment: Assignment) => {
        setSelectedAssignment(assignment);
        setShowDialog(true);
    };

    const confirmDelete = async () => {
        if (!selectedAssignment) return;

        try {
            setLoading(true);
            setError(null);
            await deleteAssignment(selectedAssignment._id);
            setShowDialog(false);
            await fetchAssignments();
        } catch (err) {
            console.error("Error deleting assignment:", err);
            setError("Failed to delete assignment");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="p-3">Loading assignments...</div>;
    }

    if (!cid) {
        return (
            <Alert variant="info" className="m-3">
                Please select a course to view its assignments.
            </Alert>
        );
    }

    return (
        <div id="wd-assignments" className="p-3">
            {error && (
                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    {error}
                </Alert>
            )}

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Assignments</h2>
                <Link to={`/Kambaz/Courses/${cid}/Assignments/add`}>
                    <Button>+ Assignment</Button>
                </Link>
            </div>

            {assignments.length === 0 ? (
                <Alert variant="info">
                    No assignments found. Click the "+ Assignment" button to create one.
                </Alert>
            ) : (
                <ListGroup className="rounded-0">
                    {assignments.map((assignment) => (
                        <ListGroup.Item key={assignment._id} className="wd-assignment">
                            <Row>
                                <Col xs={2} className="d-flex align-items-center">
                                    <BsGripVertical className="me-2" />
                                    <MdOutlineAssignmentTurnedIn />
                                </Col>
                                <Col xs={8}>
                                    <Link
                                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                        className="text-decoration-none"
                                    >
                                        {assignment.title}
                                    </Link>
                                    {assignment.dueDate && (
                                        <div className="text-muted small">
                                            Due: {new Date(assignment.dueDate).toLocaleDateString()}
                                        </div>
                                    )}
                                </Col>
                                <Col xs={2} className="d-flex align-items-center justify-content-end">
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(assignment)}
                                        disabled={loading}
                                    >
                                        <FaTrash />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            {/* Confirmation Dialog */}
            {showDialog && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowDialog(false)}
                                    disabled={loading}
                                ></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete "{selectedAssignment?.title}"?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowDialog(false)}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={confirmDelete}
                                    disabled={loading}
                                >
                                    {loading ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
