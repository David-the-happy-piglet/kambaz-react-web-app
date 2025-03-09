import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
export default function AssignmentControlButtons({ assignmentID, deleteAssignment }: { assignmentID: string, deleteAssignment: (assignmentID: string) => void }) {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentID)} />
        </div>);
}