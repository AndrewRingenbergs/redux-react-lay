import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import './App.css';

class App extends Component {

  render() {
    const numbers = this.props.todoList;
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    
    return (
      <div className="App">
        <button type='button' onClick={this.props.actions.buttonClicked}>Test</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.myData.todoList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [1, 2, 3, 4, 5]
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
      let newList = this.state.todoList;
      newList.push(Math.max(...newList)+1);

      this.setState({
      todoList: newList
    });
  }

  render() {
    const numbers = this.state.todoList;
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    
    return (
      <div className="App">
        <button type='button' onClick={this.handleButtonClick}>Test</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default App;
*/