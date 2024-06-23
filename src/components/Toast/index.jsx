import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Icon, IconIdentifier } from '../';
import './Toast.css';

const ToastManager = () => {
  const closeButton = ({ closeToast }) => {
    return (
      <Icon
        iconSize={16}
        className="sag-toast__close-icon"
        iconIdentifier={IconIdentifier.Cross}
        onClick={closeToast}
      />
    );
  };

  return (
    <ToastContainer
      toastClassName="event-toast"
      bodyClassName="event-toast__body"
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      closeButton={closeButton}
    />
  );
};

export default ToastManager;
