import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">

            {/*            <div id="wd-search-assignment"> */}

            {/*  <input id="wd-search-assignment"
                    placeholder="Search..." /> */}

            {/* <FaSearch />
            <input id="wd-search-assignment" className="mb-3 float-left col-xs-4" placeholder="Search..." />
 */}

            <InputGroup className="float-left col-xs-1" >

                <InputGroup.Text>
                    <FaSearch />
                </InputGroup.Text>

                <FormControl className="float-left col-xs-4" placeholder="Search for Assignments" />
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>

                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>

            </InputGroup>



            {/* <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>

            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button> */}



            {/*        </div> */}


        </div>
    );
}