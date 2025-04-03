import { useEffect, useState } from "react";
import { Button, Form, Modal, Table, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { User, createUser, deleteUser, findUsersByCourse, updateUser } from "../../Users/client";

export default function People() {
    const { cid } = useSelector((state: any) => state.courseReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [newUser, setNewUser] = useState<Partial<User>>({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "STUDENT"
    });

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            if (!cid) {
                setError("No course selected");
                return;
            }
            const courseUsers = await findUsersByCourse(cid);
            setUsers(courseUsers || []);
        } catch (error) {
            console.error("Error fetching users:", error);
            setError("Failed to load users. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [cid]);

    const handleCreateUser = async () => {
        try {
            if (!newUser.username || !newUser.password || !newUser.firstName || !newUser.lastName) {
                setError("Please fill in all required fields");
                return;
            }
            const createdUser = await createUser(newUser);
            setUsers([...users, createdUser]);
            setShowModal(false);
            setNewUser({
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                role: "STUDENT"
            });
        } catch (error) {
            console.error("Error creating user:", error);
            setError("Failed to create user. Please try again.");
        }
    };

    const handleUpdateUser = async () => {
        try {
            if (!editingUser) return;
            if (!editingUser.username || !editingUser.firstName || !editingUser.lastName) {
                setError("Please fill in all required fields");
                return;
            }
            const updatedUser = await updateUser(editingUser._id, editingUser);
            setUsers(users.map(u => u._id === editingUser._id ? updatedUser : u));
            setShowModal(false);
            setEditingUser(null);
        } catch (error) {
            console.error("Error updating user:", error);
            setError("Failed to update user. Please try again.");
        }
    };

    const handleDeleteUser = async (userId: string) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUser(userId);
                setUsers(users.filter(u => u._id !== userId));
            } catch (error) {
                console.error("Error deleting user:", error);
                setError("Failed to delete user. Please try again.");
            }
        }
    };

    const handleEditUser = (user: User) => {
        setEditingUser(user);
        setShowModal(true);
    };

    if (loading) {
        return <div className="container mt-4">Loading...</div>;
    }

    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>People</h2>
                {isFaculty && (
                    <Button onClick={() => setShowModal(true)}>
                        Add User
                    </Button>
                )}
            </div>

            {error && (
                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    {error}
                </Alert>
            )}

            {!cid ? (
                <Alert variant="info">Please select a course to view its members.</Alert>
            ) : users.length === 0 ? (
                <Alert variant="info">No users enrolled in this course yet.</Alert>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Role</th>
                            {isFaculty && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                {isFaculty && (
                                    <td>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => handleEditUser(user)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleDeleteUser(user._id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <Modal show={showModal} onHide={() => {
                setShowModal(false);
                setEditingUser(null);
                setNewUser({
                    username: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    role: "STUDENT"
                });
                setError(null);
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingUser ? "Edit User" : "Add New User"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={editingUser?.username || newUser.username}
                                onChange={(e) => {
                                    if (editingUser) {
                                        setEditingUser({ ...editingUser, username: e.target.value });
                                    } else {
                                        setNewUser({ ...newUser, username: e.target.value });
                                    }
                                }}
                            />
                        </Form.Group>
                        {!editingUser && (
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={newUser.password}
                                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                />
                            </Form.Group>
                        )}
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editingUser?.firstName || newUser.firstName}
                                onChange={(e) => {
                                    if (editingUser) {
                                        setEditingUser({ ...editingUser, firstName: e.target.value });
                                    } else {
                                        setNewUser({ ...newUser, firstName: e.target.value });
                                    }
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editingUser?.lastName || newUser.lastName}
                                onChange={(e) => {
                                    if (editingUser) {
                                        setEditingUser({ ...editingUser, lastName: e.target.value });
                                    } else {
                                        setNewUser({ ...newUser, lastName: e.target.value });
                                    }
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                value={editingUser?.role || newUser.role}
                                onChange={(e) => {
                                    if (editingUser) {
                                        setEditingUser({ ...editingUser, role: e.target.value as "FACULTY" | "STUDENT" });
                                    } else {
                                        setNewUser({ ...newUser, role: e.target.value as "FACULTY" | "STUDENT" });
                                    }
                                }}
                            >
                                <option value="STUDENT">Student</option>
                                <option value="FACULTY">Faculty</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={editingUser ? handleUpdateUser : handleCreateUser}
                    >
                        {editingUser ? "Update" : "Create"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
} 