import { useSelector } from "react-redux";
import { isFaculty } from "../../Account/reducer";
import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);// get the current user from the store

    return (
        <div>

            <div className="d-flex" id="wd-home">
                <div className="flex-fill me-3">
                    <Modules />
                </div>

                {isFaculty(currentUser) && (
                    <div>
                        <CourseStatus />
                    </div>
                )}
            </div>

        </div>
    )

}