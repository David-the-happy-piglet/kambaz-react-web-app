import { Modal, Button } from "react-bootstrap";
export default function DeleteConfirm({ show, handleClose, dialogTitle, assignmentID, deleteAssignment }: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignmentID: string, deleteAssignment: (assignmentID: string) => void
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete the assignment ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                <Button variant="danger"
                    onClick={() => {
                        deleteAssignment(assignmentID);
                        handleClose();
                    }} > Delete </Button>
            </Modal.Footer>
        </Modal>
    );
}