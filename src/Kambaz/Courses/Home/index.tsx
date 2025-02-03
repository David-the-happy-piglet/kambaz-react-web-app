import Modules from "../Modules";

export default function Home() {

    return (
        <div>
            <table>
                <tr>
                    <td valign="top">
                        <Modules />
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
    )

}