// logic and manage state

import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task:</label>
          <input type="text" id="taskInput" onChange={this.handleChange} value={this.state.task}/>
          <button type="submit">Add task</button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;
