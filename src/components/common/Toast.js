import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

export default function Toast({ isOpen, title, message, severity }) {
  const position = {
    vertical: 'bottom',
    horizontal: 'center'
  };

  return (
    <Snackbar open={isOpen} anchorOrigin={position}>
      <Alert variant="filled" severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  )
}
