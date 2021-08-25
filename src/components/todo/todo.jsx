import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todo.css';
import { deleteTodoAction } from '../../store/actions/deleteTodoAction';
import { bindActionCreators } from 'redux';

class Todo extends Component {
    render() {
        return (
            <div className="to-do">
                <span className="to-do-name">{this.props.item.workName}</span>
                <div>
                    <sub className="to-do-date">Created: {new Date(this.props.item.date).toLocaleString()}</sub>
                    <button className="to-do-delete" onClick={() => this.props.deleteTodoById(this.props.item.date)}>Delete</button>
                </div>
            </div>
        );
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ deleteTodoById: deleteTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(Todo);
