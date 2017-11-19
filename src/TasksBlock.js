import React, { Component } from 'react';
import Task from './Task'

class TasksBlock extends Component {
    constructor() {
        super();
        this.state = {
            tasksNumber: 0,
            tasks: []
        }
    }

    _addTask() {
        const task = {
            id: Math.floor(Math.random()*(9999 - this.state.tasks.length + 1)) + this.state.tasks.length,
        };
        this.setState({
            tasksNumber: this.state.tasksNumber + 1,
            tasks: this.state.tasks.concat([task])
        });
    }

    _deleteTask(task_id) {
        const tasks = this.state.tasks.filter(
            task => task.id !== task_id
        );
        this.setState({
            tasks,
            tasksNumber: this.state.tasksNumber - 1,
        });
    }

    _getTasks() {
        return this.state.tasks.map((task) => {
           return (<Task
               id={task.id}
               delete={this._deleteTask.bind(this)}
               />
           );
        });
    }

    _tasksCounter(tasksCount) {
        if(tasksCount === 0) {
            return 'You have no tasks '
        } else if(tasksCount === 1) {
            return 'You have 1 task '
        } else {
            return `You have ${tasksCount} tasks `
        }
    }

    render() {
        const tasks = this._getTasks();
        return (
          <div className="tasks-block">
              <h2 className="day-name">{this.props.day}</h2>
              <h3>{this._tasksCounter(tasks.length) + 'for ' + this.props.day.toLowerCase()}</h3>
              {tasks}
              <button className="add-task-button" onClick={this._addTask.bind(this)}>Add task</button>
          </div>
        );
    }
}

export default TasksBlock