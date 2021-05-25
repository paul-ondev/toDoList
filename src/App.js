import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy of the current list
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    let updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>to Do list</h1>
          <div>
            <label htmlFor="itemName">add an item...</label>
            <input
              id="itemName"
              type="text"
              placeholder="Name of a new item..."
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button onClick={() => this.addItem()}>Create new item</button>
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
