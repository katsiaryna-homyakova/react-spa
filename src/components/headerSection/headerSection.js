import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'Components/logo/logo';
import NavigationItem from 'Components/navigationItem/navigationItem';
import './headerSection.scss';

const HeaderSection = (props) => {
  const { children } = props;
  return (
    <div className="header-container-wrapper">
      <div className="header-container-blur" />
      <div className="header-container-content">
        <div className="logo-head">
          <Logo />
          <div className="navigation">
            <NavigationItem />
          </div>
        </div>

        <div className="content-wrapper">
          {children}
        </div>

      </div>
    </div>
  );
};

HeaderSection.propTypes = {
  children: PropTypes.node.isRequired,
};
export default HeaderSection;
