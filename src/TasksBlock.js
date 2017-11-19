import React, { Component } from 'react';
import Task from './Task'
import TaskInput from './TaskInput'

class TasksBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksNumber: 0,
            tasks: []
        }
    }

    _addTask(taskBody) {
        const task = {
            id: Math.floor(Math.random()*(9999 - this.state.tasks.length + 1)) + this.state.tasks.length,
            body: taskBody,
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
               body={task.body}
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
              <h4>{this._tasksCounter(tasks.length) + 'for ' + this.props.day.toLowerCase()}</h4>
              {tasks}
              <TaskInput add={this._addTask.bind(this)}/>
          </div>
        );
    }
}

export default TasksBlock