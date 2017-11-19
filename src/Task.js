import React, { Component } from 'react';

class Task extends Component {

    _handleDelete() {
        this.props.delete(this.props.id);
    }

    render() {
        return(
            <div onClick={this._handleDelete.bind(this)} className="task-div">
                <h4>Task {this.props.id}</h4>
            </div>
        )
    }
}

export default Task