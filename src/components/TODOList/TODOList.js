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
    //console.log(this.props)
    if(!auth.uid) return <Redirect to='/login' />
    return (
    <div className="row">
      <LeftArea tasks = {tasks} uid = {auth.uid}/>
      <Route path = '/:id' component = {RightArea}/>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.firestore.ordered.tasks,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'tasks'}
  ])
  )(TODOList);
