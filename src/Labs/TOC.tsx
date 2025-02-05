import { Nav } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */
export default function TOC() {
    return (
        /*         <ul>
                    <li><Link to="/Labs" id="wd-a"> Labs </Link></li>
                    <li><Link to="/Labs/Lab1" id="wd-a1"> Lab 1 </Link></li>
                    <li><Link to="/Labs/Lab2" id="wd-a2"> Lab 2 </Link></li>
                    <li><Link to="/Kambaz" id="wd-a3"> Back to Kambaz </Link></li>
                    <li><a href="https://github.com/David-the-happy-piglet/kambaz-react-web-app/tree/a1"
                        id="wd-github-link" target="_blank">Github Repository</a></li>
                </ul > */

        <Nav variant="pills">
            {/* <Nav.Item>
                <Nav.Link href="#/Labs">Labs</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
                <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/David-the-happy-piglet/kambaz-react-web-app/tree/a2">Github Repository</Nav.Link>
            </Nav.Item>
        </Nav>

    );
}