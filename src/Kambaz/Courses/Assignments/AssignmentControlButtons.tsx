import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
/* import { deleteAssignment } from "./reducer"; */
import { useState } from "react";
import DeleteConfirm from "./DeleteConfirm";

export default function AssignmentControlButtons({ assignmentID, deleteAssignment }: { assignmentID: string, deleteAssignment: (assignmentID: string) => void }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <FaTrash className="text-danger me-2 mb-1" onClick={handleShow} />


            <DeleteConfirm show={show} handleClose={handleClose} dialogTitle="Delete Assignment" assignmentID={assignmentID} deleteAssignment={deleteAssignment} />
        </div>);
}