import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import useForm from '../hook/useForm';
import validateForm from '../hook/validateForm';
import "./styles.css";

const JobApplicationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: ''
  };

  const skillsOptions = ['JavaScript', 'CSS', 'Python', 'Java', 'React'];

  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm(initialValues, validateForm);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          isInvalid={!!errors.fullName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.fullName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          isInvalid={!!errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPosition">
        <Form.Label>Applying for Position</Form.Label>
        <Form.Control
          as="select"
          name="position"
          value={values.position}
          onChange={handleChange}
        >
          <option value="">Select Position</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </Form.Control>
      </Form.Group>

      {(values.position === 'Developer' || values.position === 'Designer') && (
        <Form.Group controlId="formRelevantExperience">
          <Form.Label>Relevant Experience (Years)</Form.Label>
          <Form.Control
            type="number"
            name="relevantExperience"
            value={values.relevantExperience}
            onChange={handleChange}
            isInvalid={!!errors.relevantExperience}
          />
          <Form.Control.Feedback type="invalid">
            {errors.relevantExperience}
          </Form.Control.Feedback>
        </Form.Group>
      )}

      {values.position === 'Designer' && (
        <Form.Group controlId="formPortfolioURL">
          <Form.Label>Portfolio URL</Form.Label>
          <Form.Control
            type="text"
            name="portfolioURL"
            value={values.portfolioURL}
            onChange={handleChange}
            isInvalid={!!errors.portfolioURL}
          />
          <Form.Control.Feedback type="invalid">
            {errors.portfolioURL}
          </Form.Control.Feedback>
        </Form.Group>
      )}

      {values.position === 'Manager' && (
        <Form.Group controlId="formManagementExperience">
          <Form.Label>Management Experience</Form.Label>
          <Form.Control
            type="text"
            name="managementExperience"
            value={values.managementExperience}
            onChange={handleChange}
            isInvalid={!!errors.managementExperience}
          />
          <Form.Control.Feedback type="invalid">
            {errors.managementExperience}
          </Form.Control.Feedback>
        </Form.Group>
      )}

      <Form.Group controlId="formAdditionalSkills">
        <Form.Label>Additional Skills</Form.Label>
        <Row>
          {skillsOptions.map(skill => (
            <Col key={skill}>
              <Form.Check
                type="checkbox"
                label={skill}
                value={skill}
                checked={values.additionalSkills.includes(skill)}
                onChange={e => {
                  const { checked, value } = e.target;
                  let newSkills = [...values.additionalSkills];
                  if (checked) {
                    newSkills.push(value);
                  } else {
                    newSkills = newSkills.filter(skill => skill !== value);
                  }
                  handleChange({ target: { name: 'additionalSkills', value: newSkills } });
                }}
              />
            </Col>
          ))}
        </Row>
        {errors.additionalSkills && (
          <div className="invalid-feedback d-block">
            {errors.additionalSkills}
          </div>
        )}
      </Form.Group>

      <Form.Group controlId="formPreferredInterviewTime">
        <Form.Label>Preferred Interview Time</Form.Label>
        <Form.Control
          type="datetime-local"
          name="preferredInterviewTime"
          value={values.preferredInterviewTime}
          onChange={handleChange}
          isInvalid={!!errors.preferredInterviewTime}
        />
        <Form.Control.Feedback type="invalid">
          {errors.preferredInterviewTime}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {Object.keys(errors).length === 0 && (
        <Alert variant="success" className="mt-3">
          Form submitted successfully: {JSON.stringify(values, null, 2)}
        </Alert>
      )}
    </Form>
  );
};

export default JobApplicationForm;
