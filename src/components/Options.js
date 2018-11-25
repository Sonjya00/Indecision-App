import React from "react";
import Option from "./Option";

// list of options
const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove all
      </button>
    </div>
    {props.options.length === 0 ? (
      <p className="widget__message">Please add an option to get started!</p>
    ) : (
      <div>
        {props.options.map((option, index) => (
          <Option
            key={option}
            count={index + 1}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </div>
    )}
  </div>
);

// since it's a variable, it cannot be exported inline
// alternative : export default = props => ...
// but this way in the dev tools the component does not have a name (unknown)
export default Options;
