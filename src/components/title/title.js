import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

const Title = ({ text }) => (
  <div className="title">{text}</div>
);

Title.propTypes = {
  text: PropTypes.string,

};

Title.defaultProps = {
  text: '',
};
export default Title;
