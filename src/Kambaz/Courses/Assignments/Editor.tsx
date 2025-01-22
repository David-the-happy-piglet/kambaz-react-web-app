export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENT">ASSIGNMENT</option>
                            <option value="LABS">LABS</option>
                            <option value="EXTRACREDIT">EXTRA CREDIT</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="AbsoluateValue">Absoluate Value</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="InClass">In Class</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="left" valign="top">

                    </td>
                    <td>
                        Online Entry Options<br />
                        <input type="checkbox" name="text-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="website-url" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="media-recording" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="student-annotation" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="file-uploads" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">

                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assignment Assign to</label>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">

                    </td>

                    <td>
                        <label htmlFor="wd-due-date">Assignment Assign to</label>
                        <input id="wd-due-date" type="date" />
                    </td>

                </tr>

                <tr>
                    <td align="right" valign="top">

                    </td>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label>
                        <input id="wd-available-from" type="date" />
                    </td>

                    <td>
                        <label htmlFor="wd-available-until">Until</label>
                        <input id="wd-available-until" type="date" />
                    </td>
                </tr>
            </table>

            <hr />

            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}
