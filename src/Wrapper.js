import React, { Component } from 'react';
import TasksBlock from './TasksBlock'

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="wrapper-heading">TO DO List</h1>
                <TasksBlock  day="Today"/>
                <TasksBlock day="Tomorrow"/>
                <TasksBlock day="This week"/>
            </div>
        );
    }
}

export default Wrapper;
