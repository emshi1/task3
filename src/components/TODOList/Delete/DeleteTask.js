import React, { Component } from 'react';
import style from './ButDelete.module.css';
import { connect } from 'react-redux';
import { deleteTask } from '../../../store/actions/taskActions';


class DeleteTask extends Component {

    state = {
        id: this.props.id,
        title: this.props.task
    }
    handleClick = (id) => {
        if (window.confirm(`Удалить список дел ${this.state.title}?`)){
            this.props.deleteTask(this.state.id);}
    }

    render() {
        return (
                <button type="button" onClick = {this.handleClick} className={`btn btn-danger ${style.x}`}>x</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null, mapDispatchToProps)(DeleteTask);