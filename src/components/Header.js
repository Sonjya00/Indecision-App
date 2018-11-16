import React from "react";

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// Set up a default value in case a prop isn't passed to the Header component
// We have a title passed as props from app, so this value is not used
Header.defaultProps = {
  title: "Indecision"
};

export default Header;
