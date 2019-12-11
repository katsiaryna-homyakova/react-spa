import React from "react";
import Logo from "../logo/logo";
import NavigationItem from "../navigationItem/navigationItem";



import "./headerSection.scss";

const HeaderSection = (props) =>(


      <div className="header-container-wrapper">
        <div className="header-container-blur"></div>
        <div className="header-container-content">
          <div className="logo-head">
            <Logo />
            <div className="navigation">
          <NavigationItem/>
          </div>
          </div>
         
          <div className="content-wrapper">
              {props.children}
          </div>
         
        </div>
      </div>
 
);
export default HeaderSection;