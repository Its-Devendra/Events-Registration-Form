import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import validateForm from '../hooks/validationForm';
// import Icon, { IconIdentifier } from '../Icon';
import './DynamicForm.scss';

const DynamicForm = ({ show, onClose }) => {
  const [submittedData, setSubmittedData] = useState(null);
  const initialValues = {
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: ''
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm(initialValues, (values) => {
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(values);
    }
    return validationErrors;
  });

  return (
    <Modal show={show} onHide={onClose} centered className="dynamic-form-modal">
      <Modal.Header className="dynamic-form-modal__header">
        <Modal.Title className="dynamic-form-modal__title">Event Registration</Modal.Title>
        <Button variant="link" className="dynamic-form-modal__close-btn" onClick={onClose}>
          {/* <Icon iconIdentifier={IconIdentifier.Cross} iconSize={24} /> */}X
        </Button>
      </Modal.Header>
      {/* <hr className="dynamic-form-modal__separator" /> */}
      <Modal.Body className="dynamic-form-modal__body">
        {!submittedData ? (
          <Form onSubmit={handleSubmit} className="dynamic-form-modal__form">
            <Form.Group className="dynamic-form-modal__form-group">
              <Form.Label className="dynamic-form-modal__label">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                maxLength={50}
                className="dynamic-form-modal__input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="dynamic-form-modal__form-group">
              <Form.Label className="dynamic-form-modal__label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                className="dynamic-form-modal__input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="dynamic-form-modal__form-group">
              <Form.Label className="dynamic-form-modal__label">Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Enter your Age"
                value={values.age}
                onChange={handleChange}
                isInvalid={!!errors.age}
                className="dynamic-form-modal__input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="dynamic-form-modal__form-group">
              <Form.Label className="dynamic-form-modal__label">Are you attending with a guest?</Form.Label>
              <Form.Select
                name="attendingWithGuest"
                value={values.attendingWithGuest}
                onChange={handleChange}
                className="dynamic-form-modal__select"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </Form.Select>
            </Form.Group>
            {values.attendingWithGuest === 'Yes' && (
              <Form.Group className="dynamic-form-modal__form-group">
                <Form.Label className="dynamic-form-modal__label">Guest Name</Form.Label>
                <Form.Control
                  type="text"
                  name="guestName"
                  placeholder="Enter Guest Name"
                  value={values.guestName}
                  onChange={handleChange}
                  isInvalid={!!errors.guestName}
                  className="dynamic-form-modal__input"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.guestName}
                </Form.Control.Feedback>
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className="dynamic-form-modal__submit-btn">
              Submit
            </Button>
          </Form>
        ) : (
          <div className="dynamic-form-modal__summary">
            <h4 className="dynamic-form-modal__summary-title">Submission Summary</h4>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Attending with Guest:</strong> {submittedData.attendingWithGuest}</p>
            {submittedData.attendingWithGuest === 'Yes' && (
              <p><strong>Guest Name:</strong> {submittedData.guestName}</p>
            )}
            <Button variant="secondary" onClick={onClose} className="dynamic-form-modal__close-summary-btn">
              Close
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DynamicForm;
