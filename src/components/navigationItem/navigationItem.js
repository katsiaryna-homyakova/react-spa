import React from 'react';
import './navigationItem.scss';
import {
  Link,
} from 'react-router-dom';

const NavigationItem = () => (
  <Link to="/"><i className="fas fa-search navigation-item" /></Link>
);
export default NavigationItem;
