import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Alert } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
// import { /* useDispatch, */ useSelector } from "react-redux";
import { Assignment, createAssignment, findAssignmentById, updateAssignment } from "./client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [assignment, setAssignment] = useState<Partial<Assignment>>({
        title: "",
        description: "",
        points: 100,
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
        course: cid
    });

    useEffect(() => {
        const fetchAssignment = async () => {
            if (!cid) {
                setError("No course ID provided");
                return;
            }

            if (aid && aid !== "add") {
                try {
                    setLoading(true);
                    setError(null);
                    const fetchedAssignment = await findAssignmentById(aid);
                    if (fetchedAssignment) {
                        setAssignment(fetchedAssignment);
                    } else {
                        setError("Assignment not found");
                    }
                } catch (err) {
                    console.error("Error fetching assignment:", err);
                    setError("Failed to load assignment");
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchAssignment();
    }, [aid, cid]);

    const handleSave = async () => {
        if (!cid) {
            setError("No course ID provided");
            return;
        }

        if (!assignment.title) {
            setError("Assignment title is required");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            if (aid === "add") {
                await createAssignment(cid, assignment);
            } else if (aid) {
                await updateAssignment(aid, assignment);
            }
            navigate(`/Kambaz/Courses/${cid}/Assignments`);
        } catch (err) {
            console.error("Error saving assignment:", err);
            setError("Failed to save assignment");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    if (loading) {
        return <div className="p-3">Loading...</div>;
    }

    return (
        <div id="wd-assignments-editor" className="p-3">
            <h3>{aid === "add" ? "New Assignment" : "Edit Assignment"}</h3>

            {error && (
                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    {error}
                </Alert>
            )}

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={assignment.title || ""}
                        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                        isInvalid={!assignment.title}
                    />
                    <Form.Control.Feedback type="invalid">
                        Assignment name is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={assignment.description || ""}
                        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                    />
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="number"
                            value={assignment.points || 100}
                            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Due Date</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="date"
                            value={assignment.dueDate || ""}
                            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Available From</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="date"
                            value={assignment.availableFrom || ""}
                            onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Available Until</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="date"
                            value={assignment.availableUntil || ""}
                            onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Assignment Group</Form.Label>
                    <Col sm={4}>
                        <Form.Select>
                            <option value="ASSIGNMENT">ASSIGNMENT</option>
                            <option value="LABS">LABS</option>
                            <option value="EXTRACREDIT">EXTRA CREDIT</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Display Grade as</Form.Label>
                    <Col sm={4}>
                        <Form.Select>
                            <option value="Percentage">Percentage</option>
                            <option value="AbsoluteValue">Absolute Value</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Submission Type</Form.Label>
                    <Col sm={4}>
                        <Form.Select>
                            <option value="Online">Online</option>
                            <option value="InClass">In Class</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <div className="mt-4">
                    <Button
                        onClick={handleSave}
                        className="me-2"
                        disabled={loading || !assignment.title}
                    >
                        {loading ? "Saving..." : "Save"}
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={handleCancel}
                        disabled={loading}
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}
