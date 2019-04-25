import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sad1", name: "Abdulslam", age: 27 },
      { id: "yxc2", name: "Mayar", age: 23 },
      { id: "qwe3", name: "Ali", age: 25 }
    ],
    showPersons: false
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
  deletPersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow });
  };

  render() {
    const style = {
      backgroundColor: "#E3E3E3",
      font: "inherit",
      border: "1px solid black",
      boxShadow: " 0 10px 8px #ccc",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "15px"
    };
    const headingStyle = {
      color: "red"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletPersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1 style={headingStyle}> Hi I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
