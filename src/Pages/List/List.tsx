import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "./List.css";
import { ViewPage } from "./ViewPage";
import { mockMembers } from "../Utils/MockData";
import { useNavigate, useParams } from "react-router-dom";

export const MemberLists = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  console.log("id", id);

  const [selectedMember, setSelectedMember] = useState<any | null>(() => {
    if (id) {
      const member = mockMembers.find((member) => member.id === parseInt(id));
      return member || null;
    }
    return null;
  });
  const handleView = (data: any) => {
    setSelectedMember(data);
    navigate(`/details/${data.id}`,{ state: { fromButton: true } });
  };
  const handleBack = () => {
    setSelectedMember(null);
    navigate(`/details`);
  };
  return (
    <>
      <Container>
        {selectedMember ? (
          <ViewPage memberDetail={selectedMember} onBack={handleBack} />
        ) : (
          <>
            <Row>
              <Col>
                <h2>Gym Members List</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table striped="columns">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>MembershipType</th>
                      <th>JoinDate</th>
                      <th>renewalDate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockMembers.map((member, index) => (
                      <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                        <td>{member.membershipType}</td>
                        <td>{member.joinDate}</td>
                        <td>{member.renewalDate}</td>
                        <td>
                          <Button size="sm" onClick={() => handleView(member)}>
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
