import React, { useState, FC, FormEvent, ChangeEvent } from 'react';
import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';
import './Admin.css';

interface Member {
  id: number;
  name: string;
  age: number;
  membershipType: string;
  joinDate: string;
}

const initialMembers: Member[] = [
  { id: 1, name: 'John Doe', age: 28, membershipType: 'Premium', joinDate: '2023-01-15' },
  { id: 2, name: 'Jane Smith', age: 32, membershipType: 'Standard', joinDate: '2022-11-20' },
  { id: 3, name: 'Bob Johnson', age: 24, membershipType: 'Basic', joinDate: '2021-05-05' },
  { id: 4, name: 'Alice Brown', age: 29, membershipType: 'Premium', joinDate: '2022-02-25' },
  { id: 5, name: 'Michael Davis', age: 35, membershipType: 'Standard', joinDate: '2023-03-17' },
  { id: 6, name: 'Sarah Wilson', age: 31, membershipType: 'Basic', joinDate: '2021-07-12' },
  { id: 7, name: 'Chris Lee', age: 27, membershipType: 'Premium', joinDate: '2022-09-03' },
  { id: 8, name: 'Laura Harris', age: 26, membershipType: 'Standard', joinDate: '2023-04-01' },
  { id: 9, name: 'David Martin', age: 30, membershipType: 'Basic', joinDate: '2021-12-22' },
  { id: 10, name: 'Emma Thompson', age: 33, membershipType: 'Premium', joinDate: '2022-06-10' },
  { id: 11, name: 'James White', age: 29, membershipType: 'Standard', joinDate: '2023-02-05' },
  { id: 12, name: 'Olivia Clark', age: 25, membershipType: 'Basic', joinDate: '2021-08-19' },
  { id: 13, name: 'Henry Lewis', age: 34, membershipType: 'Premium', joinDate: '2022-10-14' },
  { id: 14, name: 'Sophia Walker', age: 28, membershipType: 'Standard', joinDate: '2023-05-23' },
  { id: 15, name: 'Daniel Hall', age: 32, membershipType: 'Basic', joinDate: '2021-04-30' }
];

export const AdminPage: FC = () => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [show, setShow] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleSave = (member: Member) => {
    if (editingMember) {
      setMembers(members.map(m => (m.id === member.id ? member : m)));
    } else {
      member.id = members.length + 1;
      setMembers([...members, member]);
    }
    handleClose();
  };

  const handleEdit = (member: Member) => {
    setEditingMember(member);
    handleShow();
  };

  const handleAdd = () => {
    setEditingMember(null);
    handleShow();
  };

  return (
    <div className='full-background'>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h2>Admin Panel</h2>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Button variant="primary" onClick={handleAdd}>Add Member</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Membership Type</th>
                  <th>Join Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.id}>
                    <td>{index + 1}</td>
                    <td>{member.name}</td>
                    <td>{member.age}</td>
                    <td>{member.membershipType}</td>
                    <td>{member.joinDate}</td>
                    <td>
                      <Button variant="warning" size="sm" className="mr-2" onClick={() => handleEdit(member)}>Edit</Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(member.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <MemberModal show={show} handleClose={handleClose} handleSave={handleSave} member={editingMember} />
      </Container>
    </div>
  );
};

interface MemberModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (member: Member) => void;
  member: Member | null;
}

const MemberModal: FC<MemberModalProps> = ({ show, handleClose, handleSave, member }) => {
  const [name, setName] = useState<string>(member ? member.name : '');
  const [age, setAge] = useState<number | string>(member ? member.age : '');
  const [membershipType, setMembershipType] = useState<string>(member ? member.membershipType : '');
  const [joinDate, setJoinDate] = useState<string>(member ? member.joinDate : '');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSave({ id: member ? member.id : 0, name, age: Number(age), membershipType, joinDate });
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{member ? 'Edit Member' : 'Add Member'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleInputChange(setName)} required />
          </Form.Group>
          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter age" value={age} onChange={handleInputChange(setAge)} required />
          </Form.Group>
          <Form.Group controlId="formMembershipType">
            <Form.Label>Membership Type</Form.Label>
            <Form.Control type="text" placeholder="Enter membership type" value={membershipType} onChange={handleInputChange(setMembershipType)} required />
          </Form.Group>
          <Form.Group controlId="formJoinDate">
            <Form.Label>Join Date</Form.Label>
            <Form.Control type="date" placeholder="Enter join date" value={joinDate} onChange={handleInputChange(setJoinDate)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
