import React from 'react';

const Errors = ({errors}) => {

  const errorMessages = Object.keys(errors || {}).map((name) => {
    const messages = errors[name].join(` `);
    return `${name} ${messages}`;
  });

  return (
    <ul className="error-messages">
      {errorMessages.map((errorMessage) => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ul>
  );
};

export default Errors;
