import React from "react";
import Option from "./Option";

// list of options
const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length === 0 ? (
      <p>Please add an option to get started!</p>
    ) : (
      <div>
        {props.options.map(option => (
          <Option
            key={option}
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
