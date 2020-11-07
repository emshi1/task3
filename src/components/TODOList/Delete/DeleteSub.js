import React, { Component } from 'react';
import style from './ButDelete.module.css';
import { connect } from 'react-redux';
import { deleteSub } from '../../../store/actions/subtaskActions';



class DeleteSub extends Component {

    state = {
        id: this.props.id,
        title: this.props.title,
        parrent: this.props.parrent,
    }
    handleClick = (id) => {
        //console.log(this.state);
        if (window.confirm(`Удалить дело ${this.state.title}?`)){
            this.props.deleteSub(this.state.id, this.state.parrent);}
    }

    render() {
        return (
                <button type="button" onClick = {this.handleClick} className={`btn btn-danger ${style.x}`}>x</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSub: (id, parrent) => dispatch(deleteSub(id, parrent))
    }
}


export default connect(null, mapDispatchToProps)(DeleteSub);