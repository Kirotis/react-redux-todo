import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodoAction } from '../../store/actions/addTodoAction';

class AddTodo extends Component {
    addTodo(event) {
        const workName = event.target.value;
        console.log("workName", workName)
        if (event.key === 'Enter' && !!workName) {
            this.props.addTodo({ workName });
            event.target.value = null;
        }
    }

    render() {
        return (
            <input type="text" className="search" placeholder="Enter Your Work Here" onKeyDown={event => this.addTodo(event)} />
        );
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ addTodo: addTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(AddTodo);