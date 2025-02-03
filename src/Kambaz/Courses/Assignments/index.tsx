export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kambaz/Courses/5610/Assignments/A1">
                        A1 - ENV + HTML
                    </a>
                    <br />
                    Multiple Modules | <b>Not available until</b> May.6 at 12:00am |
                    <br />
                    <b>Due </b>May.13 at 12:00am
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kambaz/Courses/5610/Assignments/A2">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    Multiple Modules | <b>Not available until</b> May.13 at 12:00am |
                    <br />
                    <b>Due </b>May.20 at 12:00am
                </li>

                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href="#/Kambaz/Courses/5610/Assignments/A3">
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <br />
                    Multiple Modules | <b>Not available until</b> May.20 at 12:00am |
                    <br />
                    <b>Due </b>May.27 at 12:00am
                </li>
            </ul>

        </div>
    );
}
