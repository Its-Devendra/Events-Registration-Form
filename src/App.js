// src/App.js
import React, { useState } from 'react';
import DynamicForm from './components/RegistrationForm/DynamicForm';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="App">
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Button variant="primary" onClick={handleShow}>
        Open Form
      </Button>
      <DynamicForm show={show} onClose={handleClose} />
    </div>
    </div>
  );
}

export default App;
