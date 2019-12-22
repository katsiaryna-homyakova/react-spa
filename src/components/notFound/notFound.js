import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './notFound.scss';

const NotFound = () => (
  <div className="not-found">
404 - Page not found
    <br />
    {' '}
Don&apos;t worry! Please visit our
    <Link to="/">Landing Page</Link>
  </div>
);

export default NotFound;
