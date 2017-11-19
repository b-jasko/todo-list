import React, { Component } from 'react';

class Task extends Component {

    _handleDelete(event) {
        event.preventDefault();
        this.props.delete(this.props.id);
    }

    render() {
        return(
            <div onClick={this._handleDelete.bind(this)} className="task-div">
                <h4>{this.props.body}</h4>
            </div>
        )
    }
}

export default Task