import { Col, ListGroup, Row } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import ControlButtons from "./ControlButtons";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

export default function Assignments() {
    return (


        <div id="wd-assignments">

            <AssignmentsControls /><br />

            <ListGroup className="rounded-0" id="wd-assignments">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ControlButtons /></div>


                    <ListGroup className="wd-assignments rounded-0">

                        <ListGroup.Item className="wd-assignment">
                            <Row>
                                <Col xs={2} className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdOutlineAssignmentTurnedIn />
                                </Col>

                                <Col xs={8}>
                                    <a className="wd-assignment-link"
                                        href="#/Kambaz/Courses/5610/Assignments/A1">
                                        A1
                                    </a>
                                    <br />
                                    Multiple Modules | <b>Not available until</b> May.6 at 12:00am |
                                    <br />
                                    <b>Due </b>May.13 at 12:00am
                                </Col>
                                <Col xs={2} className="d-flex align-items-center">
                                    <AssignmentControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-assignment">
                            <Row>
                                <Col xs={2} className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdOutlineAssignmentTurnedIn />
                                </Col>

                                <Col xs={8}>
                                    <a className="wd-assignment-link"
                                        href="#/Kambaz/Courses/5610/Assignments/A2">
                                        A2
                                    </a>
                                    <br />
                                    Multiple Modules | <b>Not available until</b> May.13 at 12:00am |
                                    <br />
                                    <b>Due </b>May.20 at 12:00am
                                </Col>
                                <Col xs={2} className="d-flex align-items-center">
                                    <AssignmentControlButtons />

                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-assignment">
                            <Row>
                                <Col xs={2} className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdOutlineAssignmentTurnedIn />
                                </Col>

                                <Col xs={8}>
                                    <a className="wd-assignment-link"
                                        href="#/Kambaz/Courses/5610/Assignments/A3">
                                        A3
                                    </a>
                                    <br />
                                    Multiple Modules | <b>Not available until</b> May.20 at 12:00am |
                                    <br />
                                    <b>Due </b>May.27 at 12:00am
                                </Col>
                                <Col xs={2} className="d-flex align-items-center">
                                    <AssignmentControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>

                    </ListGroup>




                </ListGroup.Item>
            </ListGroup>

        </div>

    );
}
