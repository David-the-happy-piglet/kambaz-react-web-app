import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">

            <div className="mb-3">
                <label htmlFor="wd-name">Assignment Name</label><br />
                <input type="text" className="form-control" id="wd-name" value="A1"></input>
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
                        <Button variant="secondary" type="submit" >Cancel</Button>
                    </Col>

                    <Col>
                        <Button variant="danger" type="submit" >Save</Button>
                    </Col>
                </Form.Group>




            </div>

        </div>
    );
}
