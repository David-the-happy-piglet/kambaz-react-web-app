import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import { updateAssignment } from "./reducer";
import { Link, useParams } from "react-router-dom";


export default function AssignmentEditor({ assignmentTitle, setAssignmentTitle, addAssignment, updateAssignment }:
    { assignmentTitle: string; setAssignmentTitle: (title: string) => void, addAssignment: () => void, updateAssignment: () => void }) {
    const { cid, aid } = useParams();


    return (
        <div id="wd-assignments-editor">

            <div className="mb-3">
                <label htmlFor="wd-name">Assignment Name</label><br />
                {aid === "add" ? (<FormControl value={assignmentTitle} className="mb-2" onChange={(e) => setAssignmentTitle(e.target.value)} />) :
                    (<FormControl value={cid} className="mb-2" onChange={(e) => setAssignmentTitle(e.target.value)} />)}

                {/* <input type="text" className="form-control" id="wd-name" value={assignmentName} ></input> */}
            </div>

            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value="The assignment is available online Submit a link to the landing page of yor Web Application on Netlify"></textarea>
            </div>

            <br />


            <div className="mb-3">

                <Form.Group as={Row} className="mb-3" controlId="wd-points">
                    <Form.Label column sm={3}>
                        Points
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="number" value="100" />
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="wd-group">
                    <Form.Label column sm={3}>
                        Assignment Group
                    </Form.Label>
                    <Col sm={8}>
                        <select className="form-select" id="wd-group">
                            <option value="ASSIGNMENT">ASSIGNMENT</option>
                            <option value="LABS">LABS</option>
                            <option value="EXTRACREDIT">EXTRA CREDIT</option>
                        </select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
                    <Form.Label column sm={3}>
                        Display Grade as
                    </Form.Label>
                    <Col sm={8}>
                        <select className="form-select" id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="AbsoluateValue">Absoluate Value</option>
                        </select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
                    <Form.Label column sm={3}>
                        Submission Type
                    </Form.Label>
                    <Col sm={8}>
                        <select className="form-select" id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="InClass">In Class</option>
                        </select>

                        <b>Online Entry Options</b> <br />

                        <Form.Check id="wd-text-entry" label="Text Entry" />
                        <Form.Check id="wd-website-url" label="Website URL" />
                        <Form.Check id="wd-media-recordings" label="Media Recordings" />
                        <Form.Check id="wd-student-annotation" label="Student Annotation" />
                        <Form.Check id="wd-file-upload" label="File Uploads" />

                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                        Assign
                    </Form.Label>
                    <Col sm={8}>
                        Assign to <br />
                        <Form.Control type="text" value="Everyone" id="wd-assign-to" />
                        Due <br />
                        <Form.Control type="date" value="Everyone" id="wd-due-date" />
                        <Row>
                            <Col sm={6}>
                                Available from
                                <Form.Control type="date" value="Everyone" id="wd-available-from" />
                            </Col>
                            <Col sm={6}>
                                Until <br />
                                <Form.Control type="date" value="Everyone" id="wd-available-until" />
                            </Col>
                        </Row>
                    </Col>
                </Form.Group>
                <hr />


                <Form.Group as={Row} className="mb-3 wd-float-right">


                    <Col>
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            <Button variant="secondary" type="submit" >Cancel</Button>
                        </Link>
                    </Col>


                    <Col>
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            {aid === "add" ? (<Button variant="danger" type="submit" onClick={() => { addAssignment }} >Save</Button>)

                                : (
                                    <Button variant="danger" type="submit" onClick={() => { updateAssignment }} >Save</Button>)
                            }
                        </Link>
                    </Col>
                </Form.Group>




            </div>

        </div>
    );
}
