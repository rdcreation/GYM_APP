import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import './CreateMember.css';

interface Member {
  name: string;
  age: number;
  membershipType: string;
  joinDate: string;
  contact: string;
  address: string;
}

const defaultMember: Member = {
  name: 'John Doe',
  age: 28,
  membershipType: 'Premium',
  joinDate: '2023-01-15',
  contact: 'john.doe@example.com',
  address: '1234 Fitness St, Gym City, Fitland'
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().positive('Age must be a positive number').required('Age is required'),
  membershipType: Yup.string().required('Membership type is required'),
  joinDate: Yup.date().max(new Date(), 'Join date cannot be in the future').required('Join date is required'),
  contact: Yup.string().email('Invalid email address').required('Contact is required'),
  address: Yup.string().required('Address is required'),
});

export const CreateMember: React.FC = () => {
  const handleSubmit = (values: Member, { setSubmitting }: FormikHelpers<Member>) => {
    console.log('Member Details:', values);
    // Handle form submission logic here
    setSubmitting(false);
  };

  return (
    <div className="full-background">
      <Container className="member-details">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center">Create Member Details</h2>
            <Formik
              initialValues={defaultMember}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Field
                      type="text"
                      name="name"
                      as={Form.Control}
                      isInvalid={touched.name && !!errors.name}
                    />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </Form.Group>
                  <Form.Group controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Field
                      type="number"
                      name="age"
                      as={Form.Control}
                      isInvalid={touched.age && !!errors.age}
                    />
                    <ErrorMessage name="age" component="div" className="text-danger" />
                  </Form.Group>
                  <Form.Group controlId="formMembershipType">
                    <Form.Label>Membership Type</Form.Label>
                    <Field
                      type="text"
                      name="membershipType"
                      as={Form.Control}
                      isInvalid={touched.membershipType && !!errors.membershipType}
                    />
                    <ErrorMessage name="membershipType" component="div" className="text-danger" />
                  </Form.Group>
                  <Form.Group controlId="formJoinDate">
                    <Form.Label>Join Date</Form.Label>
                    <Field
                      type="date"
                      name="joinDate"
                      as={Form.Control}
                      isInvalid={touched.joinDate && !!errors.joinDate}
                    />
                    <ErrorMessage name="joinDate" component="div" className="text-danger" />
                  </Form.Group>
                  <Form.Group controlId="formContact">
                    <Form.Label>Contact</Form.Label>
                    <Field
                      type="email"
                      name="contact"
                      as={Form.Control}
                      isInvalid={touched.contact && !!errors.contact}
                    />
                    <ErrorMessage name="contact" component="div" className="text-danger" />
                  </Form.Group>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Field
                      type="text"
                      name="address"
                      as={Form.Control}
                      isInvalid={touched.address && !!errors.address}
                    />
                    <ErrorMessage name="address" component="div" className="text-danger" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Details
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
