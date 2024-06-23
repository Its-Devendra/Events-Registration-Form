// src/App.js
import React, { useState } from 'react';
import DynamicForm from './components/Level 1/RegistrationForm/DynamicForm';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobApplicationForm from './components/Level 2/JobApplicationForm';


function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="App">
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* <Button variant="primary" onClick={handleShow}>
        Open Form
      </Button>
      <DynamicForm show={show} onClose={handleClose} /> */}

      <JobApplicationForm/>

    </div>
    </div>
  );
}

export default App;
