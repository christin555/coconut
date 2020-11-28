import {action, autorun, makeObservable, toJS, observable} from 'mobx';
import API from "./../utils/API";

class EventStore {
    event = {}
    events = []

    constructor() {
        makeObservable(this, {
            event: observable,
            events: observable,
            setField: action.bound,
            create: action.bound,
            setEvents: action.bound,
        })
        autorun(this.getEvents);
    }

    setField(field, value){
        this.event[field] = value;
    }
    setEvents(events){
        this.events = events;
    }
    create = async() => {
        await API.put('events/create', this.event).then(res => {
          console.log(res)
        });
    }

    getEvents = async() => {
        await API.get('events').then(res => {
            this.setEvents(res.data);
        });
    }
}


export default EventStore;
