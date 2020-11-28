import React from 'react';
import {Provider} from "mobx-react";
import EventStore from "../../../store/EventStore";
import EventView from "./EventView";

class Event extends React.Component {
  constructor() {
    super();
    this.EventStore = new EventStore();
  }
  render(){
    return(
        <Provider EventStore = {this.EventStore} >
          <EventView/>
        </Provider>
    )
  }
}

export default Event;
