import React from "react";
import { Button } from "react-bootstrap";

interface MemberDetail {
  name: string;
  age: number;
  membershipType: string;
  joinDate: string;
  renewalDate: string;
}

interface ViewPageProps {
  memberDetail: MemberDetail;
  onBack: () => void;
}

export const ViewPage: React.FC<ViewPageProps> = ({ memberDetail, onBack }) => {
  return (
    <div>
      <h2>Member Details</h2>
      <p>Name: {memberDetail.name}</p>
      <p>Age: {memberDetail.age}</p>
      <p>Membership Type: {memberDetail.membershipType}</p>
      <p>Join Date: {memberDetail.joinDate}</p>
      <p>Renewal Date: {memberDetail.renewalDate}</p>
      <Button onClick={onBack}>Back to List</Button>
    </div>
  );
};
