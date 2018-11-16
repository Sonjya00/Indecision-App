// can skip the .js extension when writing the relative path
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // the options value is configured when rendering the IndecisionApp component at the bottom,
      // and right after the component, as default state
      options: props.options
    };
    // bind the methods to "this" inside the constructor
    // (these methods are called from child components)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  // Used to fetch data from the localStorage
  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    // only if there is something stored, we save the data into the state
    if (options) {
      this.setState(() => ({
        options: options
      }));
    }
  }
  catch(e) {
    // Do nothing (in case the value is invalid)
  }

  // Used to save data every time the options inside of the state are updated
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("Unmounting component");
  }

  // delete all options
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }
  // delete only one option
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(
        optionToLeave => optionToLeave !== optionToRemove
      )
    }));
  }

  // pick one random option
  handlePick() {
    // Math.floor(Math.random() * (max - min)) + min;
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) != -1) {
      return "This option already exist";
    }
    this.setState(prevState => ({
      // use .concat() instead of .push() to not manipulate the state directly
      options: prevState.options.concat([option])
    }));
  }

  render() {
    // create variable here to make it easy to edit them, then pass them as props
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0 ? true : false}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
