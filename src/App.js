import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Abod", age: 27 },
      { name: "Mayar", age: 23 },
      { name: "Ali", age: 25 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Mayar", age: 23 },
        { name: "Ali", age: 26 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Abdulsalam", age: 27 },
        { name: event.target.value, age: 23 },
        { name: "Ali", age: 26 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1> Hi I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "Abdulsalam")}>
          Switch Names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "the King")}
          changed={this.nameChangedHandler}
        >
          my Hobby: swimmng
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
