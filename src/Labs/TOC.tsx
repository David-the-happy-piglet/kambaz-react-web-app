import { Nav } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        /*         <ul>
                    <li><Link to="/Labs" id="wd-a"> Labs </Link></li>
                    <li><Link to="/Labs/Lab1" id="wd-a1"> Lab 1 </Link></li>
                    <li><Link to="/Labs/Lab2" id="wd-a2"> Lab 2 </Link></li>
                    <li><Link to="/Kambaz" id="wd-a3"> Back to Kambaz </Link></li>
                    <li><a href="https://github.com/David-the-happy-piglet/kambaz-react-web-app/tree/a1"
                        id="wd-github-link" target="_blank">Github Repository</a></li>
                </ul > */

        <Nav variant="pills" id="wd-toc">
            {/* <Nav.Item>
                <Nav.Link href="#/Labs">Labs</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
                {/* <Nav.Link href="#/Labs/Lab1"> //hyperlink, cause the whole page to refresh */}
                <Nav.Link as={Link} to="/Labs/Lab1" id="wd-a1" //link provided by react-router, will not cause the whole page to refresh
                    active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
            </Nav.Item>

            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab2" id="wd-a2"
                active={pathname.includes("Lab2")}> Lab 2 </Nav.Link> </Nav.Item>

            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab3" id="wd-a3"
                active={pathname.includes("Lab3")}> Lab 3 </Nav.Link> </Nav.Item>

            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab4" id="wd-a4"
                active={pathname.includes("Lab4")}> Lab 4 </Nav.Link> </Nav.Item>

            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab5" id="wd-a5"
                active={pathname.includes("Lab5")}> Lab 5 </Nav.Link> </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/Kambaz" id="wd-a3">Kambaz</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="https://github.com/David-the-happy-piglet/kambaz-react-web-app/tree/a6">Github Repository - frontend</Nav.Link>
                <Nav.Link href="https://github.com/David-the-happy-piglet/kambaz-node-server-app">Github Repository - server</Nav.Link>
            </Nav.Item>
        </Nav>

    );
}