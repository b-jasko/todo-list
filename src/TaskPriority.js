import React, { Component } from 'react';

class TaskPriority extends Component {
    _handleClick1(event){
        event.preventDefault();
        this.props.changePriority('#EE070D');
    }
    _handleClick2(event){
        event.preventDefault();
        this.props.changePriority('#278016');
    }
    _handleClick3(event){
        event.preventDefault();
        this.props.changePriority('#2F3991');
    }
    _handleClick4(event){
        event.preventDefault();
        this.props.changePriority('#363637');
    }


    render() {
        return (
            <div className="priority-div" style={this.props.isHidden}>
                <div className="priority-color" style={{backgroundColor: '#EE070D'}} onClick={this._handleClick1.bind(this)}></div>
                <div className="priority-color" style={{backgroundColor: '#278016'}} onClick={this._handleClick2.bind(this)}></div>
                <div className="priority-color" style={{backgroundColor: '#2F3991'}} onClick={this._handleClick3.bind(this)}></div>
                <div className="priority-color" style={{backgroundColor: '#363637'}} onClick={this._handleClick4.bind(this)}></div>
                <div style={{ clear:'both' }}></div>
            </div>
        )
    }
}

export default TaskPriority