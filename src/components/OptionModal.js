import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  // requires at least 2 props, isOpen to determine whether the modal is open,
  // and contentLabel to set what label to put for a11y
  // in order to decide whether it is open, we check if there is a selected option
  //(passed from the parent component) and we transform it into a boolean with the double negation "!!"
  // onRequestClose is an optional prop that takes a function and uses it when the esc btn is pressed,
  // or when clicking on the background (function used to close the modal)
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    contentLabel="Selected Option"
    // the time that it takes to be closed (milliseconds)
    closeTimeoutMS={200}
    // define a custom class to override the default style of Modal
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    {/* to close the modal, clear the selected option */}
    <button className="button" onClick={props.clearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
