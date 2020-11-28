import EventsCreateView from "./EventsCreateView";
import {Provider} from "mobx-react";
import React from "react";
import EventStore from "../../../store/EventStore";

class EventsCreate extends React.Component {
    constructor() {
        super();
        this.EventStore = new EventStore();
    }

    render(){
        return(
            <Provider EventStore = {this.EventStore} >
                <EventsCreateView/>
            </Provider>
        )
    }
}

export default EventsCreate;
