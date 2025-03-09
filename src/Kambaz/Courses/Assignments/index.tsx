import { Col, ListGroup, Row, Button } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import ControlButtons from "./ControlButtons";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { isFaculty } from "../../Account/reducer";


export default function Assignments() {

    const { cid } = useParams();
    const [assignmentTitle, setAssignmentTitle] = useState("");
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    console.log("Current assignments:", assignments);
    console.log("Filtering for course:", cid);

    return (


        <div id="wd-assignments">

            <AssignmentsControls /><br />

            <ListGroup className="rounded-0" id="wd-assignments">

                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ControlButtons /></div>

                    <ListGroup className="wd-assignments rounded-0">

                        {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (



                            <ListGroup.Item className="wd-assignment" key={assignment._id}>
                                <Row>
                                    <Col xs={2} className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdOutlineAssignmentTurnedIn />
                                    </Col>

                                    <Col xs={8}>
                                        <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                            className="wd-assignment-link"> {assignment.title} </Link>

                                    </Col>

                                    <Col xs={2} className="d-flex align-items-center">
                                        <AssignmentControlButtons assignmentID={assignment._id} deleteAssignment={(assignmentID) => { dispatch(deleteAssignment(assignmentID)) }} />
                                    </Col>
                                </Row>
                            </ListGroup.Item>


                        ))}

                    </ListGroup>


                </ListGroup.Item>
            </ListGroup>

        </div>

    );
}
