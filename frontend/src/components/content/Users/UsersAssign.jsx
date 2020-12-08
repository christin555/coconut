import React from 'react';
import {Provider} from "mobx-react";
import EventStore from "../../../store/EventStore";
import UserAssignView from "./UserAssignView";

class UserAssign extends React.Component {
  constructor() {
    super();
    this.EventStore = new EventStore();
    this.EventStore.getParticipants();
  }
  render(){
    return(
        <Provider EventStore = {this.EventStore} >
          <UserAssignView/>
        </Provider>
    )
  }
}

export default UserAssign;
