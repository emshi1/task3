import React, { Component } from 'react';
import RightArea from "./RightArea/RightArea";
import LeftArea from "./LeftArea/LeftArea";
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class TODOList extends Component {
  render(){ 
    const {auth, tasks} = this.props;
    if(!auth.uid) return <Redirect to='/login' />
    return (
    <div className="row">
      <LeftArea tasks = {tasks} uid = {auth.uid}/>
      <Route subtask = {this.props} path = '/:id' component = {RightArea}/>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.firestore.ordered.tasks,
    subtask:  state.firestore.ordered.subtask,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'tasks'},
    {collection: 'subtask', orderBy: ['date', 'asc']},
  ])
  )(TODOList);
