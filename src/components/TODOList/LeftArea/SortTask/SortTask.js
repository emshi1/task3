import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTask } from '../../../../store/actions/taskActions';
import style from './SortTask.module.css';

class SortTask extends Component{

    state = {
        value: 'almoust'
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
        console.log(e.target.value)
        this.props.sortTask(this.state)
    }

    render(){
    return (
        <div className = {style.sort} >
        <select value = {this.state.value} className = {style.sel } onChange = {this.handleChange}>
            <option value = "almoust">Неисполненные</option>
            <option value = "done">Исполненные</option>
            <option value = "all">Все</option>
        </select>
        </div>
    );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      sortTask: (value) => dispatch(sortTask(value))
    }
  }

  export default connect(null, mapDispatchToProps)(SortTask);
