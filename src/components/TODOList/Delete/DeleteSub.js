import React, { Component } from 'react';
import style from './ButDelete.module.css';
import { connect } from 'react-redux';
import { deleteSub } from '../../../store/actions/subtaskActions';



class DeleteSub extends Component {

    state = {
        time: this.props.time,
        title: this.props.title,
        parrent: this.props.parrent,
    }
    handleClick = (id) => {
        //console.log(this.state);
        if (window.confirm(`Удалить дело ${this.state.title}?`)){
            this.props.deleteSub(this.state.time, this.state.parrent);}
    }

    render() {
        //console.log(this.state.id)
        return (
                <button type="button" onClick = {this.handleClick} className={`btn btn-danger ${style.x}`}>x</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSub: (time) => dispatch(deleteSub(time))
    }
}


export default connect(null, mapDispatchToProps)(DeleteSub);