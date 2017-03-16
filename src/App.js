import React, { Component } from 'react';
import './App.css';

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
