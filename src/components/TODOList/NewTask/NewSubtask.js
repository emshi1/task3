import React, { Component } from 'react';
import style from './NewTask.module.css';
import {connect} from 'react-redux';
import {createSubtask} from '../../../store/actions/subtaskActions'



class NewSubtask extends Component{
  

    state = {
        title: '',
        urgently: false,
        done: false,
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.createSubtask(this.state, this.props.parrent);
      }

    render () {
    return (
        <form onSubmit = {this.handleSubmit} className={style.add}>
            <input  className={style.text}  id = 'title' onChange = {this.handleChange}  placeholder='Введите название Дела'></input>
            <input type="checkbox" id = 'urgently' className = {style.checkbox} onChange = {this.handleChange}></input> 
            Срочное
            <button value="" className = "btn btn-success">ButAdd</button>
        </form>
    );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSubtask: (subtask, parrent) => dispatch(createSubtask(subtask, parrent))
  }
}

export default connect(null, mapDispatchToProps)(NewSubtask);