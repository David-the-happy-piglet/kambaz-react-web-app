import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {

    return (
        <div>

            <div className="d-flex" id="wd-home">
                <div className="flex-fill me-3">
                    <Modules />
                </div>

                <div>
                    <CourseStatus />
                </div>

            </div>

        </div>
    )

}