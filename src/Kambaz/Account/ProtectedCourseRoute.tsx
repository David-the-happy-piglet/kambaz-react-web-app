import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { isFaculty } from "./reducer";

function ProtectedCourseRoute({ children }: { children: any }) {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

    if (!currentUser) {
        return <Navigate to="/Kambaz/Account/SignIn" />;
    }

    const canAccess =
        isFaculty(currentUser) ||
        (currentUser.role === "STUDENT" && enrollments.includes(cid));

    if (!canAccess) {
        return <Navigate to="/Kambaz/Dashboard" />;
    }

    return children;
}

export default ProtectedCourseRoute; 