import React, { Component } from 'react';
import TaskPriority from './TaskPriority'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            backgroundColor: '#363637',
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

    _changePriority(color) {
        this.setState({
            backgroundColor: color
        });
        this._togglePriority();
    }

    render() {
        const isHidden = {display: this.state.isActive ? 'block' : 'none'};
        return(
            <div className="task-div">
                <div className="task-div-no-priority">
                    <div className="delete-task-button" onClick={this._handleDelete.bind(this)} style={{backgroundColor: this.state.backgroundColor}}>
                        {this.props.body}
                    </div>
                    <div className="set-priority-button" onClick={this._togglePriority.bind(this)}>
                        Set Priority
                    </div>
                    <div style={{ clear:'both' }}/>
                </div>
                <TaskPriority isHidden={isHidden} changePriority={this._changePriority.bind(this)}/>
                <div style={{ clear:'both' }}/>
            </div>
        )
    }
}

export default Task