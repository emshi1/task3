import React, { Component } from 'react';
import style from './NewTask.module.css';
import {connect} from 'react-redux';
import {createTask} from '../../../store/actions/taskActions'


class NewTask extends Component{
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createTask(this.state);
      }

    render () {
    return (
        <form onSubmit = {this.handleSubmit} className={style.add}>
            <input  onChange = {this.handleChange}className={style.text} id = 'title' placeholder='Введите название Списка'></input>
            <button value="" className = "btn btn-success">ButAdd</button>
        </form>
    );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task))
  }
}

export default connect(null, mapDispatchToProps)(NewTask);