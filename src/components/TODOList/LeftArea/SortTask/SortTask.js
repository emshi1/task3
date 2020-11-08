import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import style from './SortTask.module.css';

class SortTask extends Component {

    state = {
        value: 'almoust'
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
        console.log(e.target.value)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className={style.sort} >
                    <select value={this.state.value} className={style.sel} onChange={this.handleChange}>
                        <option value="almoust">Неисполненные</option>
                        <option value="done">Исполненные</option>
                        <option value="all">Все</option>
                    </select>
                </div>
                {this.props.tasks && this.props.tasks.map(t => {
                    if (this.props.uid === t.uid) {
                        if (this.state.value === 'all') {
                            return (
                                <Task task={t} key={t.id} />
                            )
                        }

                        else {
                            if (this.state.value === t.done) {
                                return (
                                    <Task task={t} key={t.id} />
                                )
                            }
                        }
                    }
                }
                )}
            </div>
        );
    }
}


export default SortTask;
