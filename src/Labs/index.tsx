import { Route, Routes } from "react-router-dom";
import Lab1 from "./Lab1";
import TOC from "./TOC";
import Lab2 from "./Lab2";
export default function Labs() {
    return (
        <div>
            <h1>Wenjie Liu</h1>
            <h1>liu.wenji@northeastern.edu</h1>
            <hr />
            <h1>Labs</h1>
            <TOC />

            <Routes>
                <Route path="Lab1/*" element={<Lab1 />} />
                <Route path="Lab2/*" element={<Lab2 />} />
            </Routes>
        </div>

    );

}