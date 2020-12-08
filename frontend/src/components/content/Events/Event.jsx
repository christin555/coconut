import React from 'react';
import {Provider} from "mobx-react";
import EventStore from "../../../store/EventStore";
import EventView from "./EventView";

class Event extends React.Component {
  constructor(props) {
    super();
    this.EventStore = new EventStore();
    this.EventStore.getEvent(props.match.params.id);
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
