import React from 'react';

export default function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>oooops! An error has occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
}