import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import useForm from './hooks/useForm';
import validateForm from './hooks/validateForm';
import fetchAdditionalQuestions from './api/fetchAdditionalQuestions';
import './SurveyForm.css';

const SurveyForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    setValues
  } = useForm(initialValues, validateForm);

  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (values.surveyTopic) {
      fetchAdditionalQuestions(values.surveyTopic)
        .then((questions) => setAdditionalQuestions(questions))
        .catch((err) => console.error(err));
    }
  }, [values.surveyTopic]);

  return (
    <div className="survey-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formFullName">
          <Form.Label column sm={3}>Full Name</Form.Label>
          <Col sm={9}>
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
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formEmail">
          <Form.Label column sm={3}>Email</Form.Label>
          <Col sm={9}>
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
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formSurveyTopic">
          <Form.Label column sm={3}>Survey Topic</Form.Label>
          <Col sm={9}>
            <Form.Control
              as="select"
              name="surveyTopic"
              value={values.surveyTopic}
              onChange={handleChange}
            >
              <option value="">Select Topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </Form.Control>
          </Col>
        </Form.Group>

        {values.surveyTopic === 'Technology' && (
          <>
            <Form.Group as={Row} controlId="formFavoriteProgrammingLanguage">
              <Form.Label column sm={3}>Favorite Programming Language</Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  name="favoriteProgrammingLanguage"
                  value={values.favoriteProgrammingLanguage}
                  onChange={handleChange}
                >
                  <option value="">Select Language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formYearsOfExperience">
              <Form.Label column sm={3}>Years of Experience</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  name="yearsOfExperience"
                  value={values.yearsOfExperience}
                  onChange={handleChange}
                  isInvalid={!!errors.yearsOfExperience}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.yearsOfExperience}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </>
        )}

        {values.surveyTopic === 'Health' && (
          <>
            <Form.Group as={Row} controlId="formExerciseFrequency">
              <Form.Label column sm={3}>Exercise Frequency</Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  name="exerciseFrequency"
                  value={values.exerciseFrequency}
                  onChange={handleChange}
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDietPreference">
              <Form.Label column sm={3}>Diet Preference</Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  name="dietPreference"
                  value={values.dietPreference}
                  onChange={handleChange}
                >
                  <option value="">Select Diet</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </>
        )}

        {values.surveyTopic === 'Education' && (
          <>
            <Form.Group as={Row} controlId="formHighestQualification">
              <Form.Label column sm={3}>Highest Qualification</Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  name="highestQualification"
                  value={values.highestQualification}
                  onChange={handleChange}
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formFieldOfStudy">
              <Form.Label column sm={3}>Field of Study</Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="fieldOfStudy"
                  value={values.fieldOfStudy}
                  onChange={handleChange}
                  isInvalid={!!errors.fieldOfStudy}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fieldOfStudy}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </>
        )}

        {additionalQuestions.map((question, index) => (
          <Form.Group as={Row} key={index} controlId={`formAdditionalQuestion${index}`}>
            <Form.Label column sm={3}>{question.label}</Form.Label>
            <Col sm={9}>
              <Form.Control
                type={question.type}
                name={`additionalQuestion${index}`}
                value={values[`additionalQuestion${index}`] || ''}
                onChange={handleChange}
                isInvalid={!!errors[`additionalQuestion${index}`]}
              />
              <Form.Control.Feedback type="invalid">
                {errors[`additionalQuestion${index}`]}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        ))}

        <Form.Group as={Row} controlId="formFeedback">
          <Form.Label column sm={3}>Feedback</Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
              isInvalid={!!errors.feedback}
              rows={4}
            />
            <Form.Control.Feedback type="invalid">
              {errors.feedback}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>

        {Object.keys(errors).length === 0 && (
          <Alert variant="success" className="mt-3">
            Form submitted successfully: {JSON.stringify(values, null, 2)}
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default SurveyForm;
