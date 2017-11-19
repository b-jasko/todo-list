import React, { Component } from 'react';
import TaskPriority from './TaskPriority'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    _handleDelete(event) {
        event.preventDefault();
        this.props.delete(this.props.id);
    }

    _togglePriority() {
        this.setState({
           isActive: !this.state.isActive,
        });
    }

    render() {
        const isHidden = {display: this.state.isActive ? 'block' : 'none'};
        return(
            <div className="task-div">
                <div className="task-div-no-priority">
                    <div className="delete-task-button" onClick={this._handleDelete.bind(this)}>
                        <h4>{this.props.body}</h4>
                    </div>
                    <div className="set-priority-button" onClick={this._togglePriority.bind(this)}>
                        <h5>Set Priority</h5>
                    </div>
                    <div style={{ clear:'both' }}></div>
                </div>
                <TaskPriority isHidden={isHidden}/>
            </div>
        )
    }
}

export default Task