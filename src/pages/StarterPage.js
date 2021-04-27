import React from 'react';
import { Link } from 'react-router-dom';

function StarterPage() {
  return (
    <>
      <h2>Feels free to use this app</h2>
      <Link to="/mainpage">Lets get started</Link>
    </>
  );
}

export default StarterPage;
