import React, { Component } from 'react';

class TaskPriority extends Component {
    render() {
        return (
            <div className="priority-div" style={this.props.isHidden}>
                <h4>priority</h4>
            </div>
        )
    }
}

export default TaskPriority