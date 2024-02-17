import React, { Component } from "react";

class CustomClassComponent extends Component {
  constructor() {
    super();
    console.log('initialized');
  }
  
  state = {
    age: 30,
    counter: 0,
    country: "US",
  };
  
  userName = "Alice";
  
  handleClick = () => {
    this.userName = "Bob";
    this.setState({ ...this.state, age: 40, country: 'CA' });
  };
  
  handleButtonClick = () => {
    this.setState((state) => {
      return { ...state, counter: state.counter + 1 };
    });
  };

  componentDidMount() {
    console.log('mounted');
    console.log(this.props)
  }

  componentDidUpdate() {
    console.log('updated')
  }

  shouldComponentUpdate(props, state) {
    console.log('should update', state, this.state)
    return state.age !== this.state.age;
  }

  componentWillUnmount() {
    console.log('unmounted')
  }

  render() {
    console.log('rendered')
    return (
      <div>
        <div onClick={this.handleClick}>
          CustomizedComponent - {this.userName}@{this.state.age} - {this.state.country}
        </div>
        <button onClick={this.handleButtonClick}>
          Click me - {this.state.counter}
        </button>
      </div>
    );
  }
}

export default CustomClassComponent;

