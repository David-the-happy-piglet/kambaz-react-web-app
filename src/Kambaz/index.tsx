import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Mail from "./Mail";

import KambazNavigation from "./KambazNavigation";
import Calendar from "./Calendar";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <h1>Welcome to Kambaz ! </h1>
            <hr />
            <table>
                <tr>
                    <td valign="top"> <KambazNavigation /> </td>
                    <td valign="top">

                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="Account/*" element={<Account />} />
                            <Route path="Dashboard/*" element={<Dashboard />} />
                            <Route path="Courses/*" element={<Courses />} />
                            <Route path="Courses/:cid/*" element={<Courses />} />
                            <Route path="Calendar/*" element={<Calendar />} />
                            <Route path="Mail/*" element={<Mail />} />
                        </Routes>

                    </td>
                </tr>
            </table>






        </div>

    );

}