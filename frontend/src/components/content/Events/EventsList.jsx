import React from 'react';
import {Provider} from "mobx-react";
import EventStore from "../../../store/EventStore";
import EventsListView from "./EventsListView";

class EventsList extends React.Component {
  constructor() {
    super();
    this.EventStore = new EventStore();
    this.EventStore.getEvents();
}
  render(){
    return(
        <Provider EventStore = {this.EventStore} >
          <EventsListView/>
        </Provider>
    )
  }
}

export default EventsList;
