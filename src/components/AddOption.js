import React from "react";

// can write the export inline (not for const or other variables, but for classes it's ok)
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    // the trim() method deletes any space before or after
    const option = e.target.elements.option.value.trim();
    // in case there is an error, the method defined in the parent component
    // returns a string, which is set as the value of the variable error.
    // in case there isn't, it will go back to "undefined"
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      // error: error
      error
    }));
    // unless the option added has an error, clear the input
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"
            placeholder="Type something"
          />
          <button class="button">Add Option</button>
        </form>
      </div>
    );
  }
}
