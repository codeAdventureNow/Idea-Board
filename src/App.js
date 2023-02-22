import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="heading">
          <h1>Idea Board</h1>
        </div>

        <div className="button">
          <button>New Idea</button>
        </div>
      </div>
    );
  }
}
