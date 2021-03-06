import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

const Button = ({
  text, classes, handleClick, id,
}) => (
  <button onClick={handleClick} className={classnames('btn', classes)} id={id} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  classes: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  classes: '',
  id: '',
};
export default Button;
