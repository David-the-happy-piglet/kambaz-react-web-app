import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Button, Alert, Spinner } from "react-bootstrap";
import * as client from "./client";

interface Grade {
    _id: string;
    student: string;
    assignment: string;
    grade: string;
}

function Grades() {
    const { assignmentId } = useParams();
    const [grades, setGrades] = useState<Grade[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchGrades = async () => {
        try {
            setLoading(true);
            setError(null);
            let data;
            if (assignmentId) {
                data = await client.findGradesByAssignment(assignmentId);
            } else {
                data = await client.findAllGrades();
            }
            setGrades(data);
        } catch (e: any) {
            console.error("Error fetching grades:", e);
            setError(e.message || "Failed to fetch grades");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGrades();
    }, [assignmentId]);

    if (loading) {
        return (
            <div className="text-center p-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <div className="container mt-4">
            <h2>{assignmentId ? `Grades for Assignment ${assignmentId}` : "All Grades"}</h2>
            {grades.length === 0 ? (
                <Alert variant="info">No grades found.</Alert>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Assignment ID</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((grade) => (
                            <tr key={grade._id}>
                                <td>{grade.student}</td>
                                <td>{grade.assignment}</td>
                                <td>{grade.grade}</td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-2">
                                        Edit
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default Grades; 