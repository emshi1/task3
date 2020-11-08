import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subDone } from '../../../../store/actions/subtaskActions';
import { doneTask } from '../../../../store/actions/taskActions';
import DeleteSub from '../../Delete/DeleteSub';
import style from './Subtask.module.css';

class Subtask extends Component {

    state = {
        title: this.props.subtask.title,
        date: this.props.subtask.date.seconds,
        done: this.props.subtask.done,
        urgently: this.props.subtask.urgently,
        id: this.props.id,
        parrent: this.props.parrent
    }

    handleChange = (e) => {
        this.setState({
           done: e.target.checked
          });
          this.props.subDone(this.state.id, e.target.checked, this.state.parrent);
          this.props.doneTask(this.state.parrent)
        }

    render() {
        if (this.props) {
            //console.log(this.props)
            let dateS = this.state.date
            let date = new Date(dateS * 1000)
            let dateFull = date.getDate() + '.' + date.getMonth()
                + '.' + date.getFullYear() + ' ' + date.getHours()
                + ':' + date.getMinutes();

            return (
                <div className={style.subtask}>
                    <input type="checkbox" checked={this.state.done} onChange = {this.handleChange}></input>
                    <div className={style.content}>
                            <input type="checkbox" id={style.check} className={style.check} disabled="disabled" defaultChecked={this.state.urgently}></input>
                            <label htmlFor = {style.check}></label>
                        <span>{this.state.title}</span>
                        <span className={style.date}>{dateFull}</span>
                        <DeleteSub title={this.state.title} id={this.state.id} parrent={this.state.parrent} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
      subDone: (id, value, parrent) => dispatch(subDone(id, value, parrent)),
      doneTask: (parrent) => dispatch(doneTask(parrent)) 
    }
  }
  
export default connect(null, mapDispatchToProps)(Subtask);