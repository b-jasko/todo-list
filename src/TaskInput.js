import React, { Component } from 'react';

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputColor: "normal",
        }
    }

    _handleAdd(event) {
        event.preventDefault();

        if(!this._body.value) {
            this.setState({inputColor: "wrong"});
            return;
        }
        this.props.add(this._body.value);
        this.setState({inputColor: "normal"});
        this._body.value = '';
    }

    render() {
        return(
            <form className="task-form">
                <input className={this.state.inputColor} placeholder="What is your task?" ref={c => this._body = c}/>
                <button className="add-task-button" onClick={this._handleAdd.bind(this)}>Add task</button>
            </form>
        );
    }
}

export default TaskInput