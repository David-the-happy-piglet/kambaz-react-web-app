export default function Modules() {
    return (
        <div>
            <table>
                <tr>
                    <td valign="top">
                        <button>Collapse All</button>
                        <button>View Progress</button>
                        <select id="publish-options" name="options">
                            <option>Publish All</option>
                            <option>Publish 1</option>
                            <option>Publish 1</option>
                        </select>
                        <button>+ Module</button>
                        <ul id="wd-modules">
                            <li className="wd-module">
                                <div className="wd-title">Week 1</div>
                                <ul className="wd-lessons">
                                    <li className="wd-lesson">
                                        <span className="wd-title">LEARNING OBJECTIVES</span>
                                        <ul className="wd-content">
                                            <li className="wd-content-item">Introduction to the course</li>
                                            <li className="wd-content-item">Learn what is Web Development</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="wd-module">
                                <div className="wd-title">Week 2</div>
                                <ul className="wd-lessons">
                                    <li className="wd-lesson">
                                        <span className="wd-title">LEARNING OBJECTIVES</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </td>

                    <td valign="top">
                        <h3>Course Status</h3>
                        <button>Publish</button>
                        <button>Unpublish</button>
                        <hr />
                        <button>Import existing Content</button>
                        <br />
                        <button>Import from Commons</button>
                        <br />
                        <button>Choose Home Page</button>
                        <br />
                        <button>View Course Stream</button>
                        <br />
                        <button>New Announcement</button>
                        <br />
                        <button>New Analytics</button>
                        <br />
                        <button>View Course Notifications</button>
                        <br />

                    </td>

                </tr>
            </table>
        </div>
    );
}
