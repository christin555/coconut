import {action, autorun, computed, makeObservable, toJS, observable} from 'mobx';
import API from "./../utils/API";

class EventStore {
    event = {}
    events = []
    status = '';
    participants=[];

    constructor() {
        makeObservable(this, {
            event: observable,
            events: observable,
            status: observable,
            participants: observable,
            setField: action.bound,
            create: action.bound,
            setEvents: action.bound,
            setParticipants: action.bound,
            toggleParticipantAssign: action.bound,
            setStatusSuccess: action.bound
        })
    }

    setField(field, value){
        this.event[field] = value;
    }
    setEvents(events){
        this.events = events;
    }
    setEvent(event){
        this.event = event;
    }
    setParticipants(participants) {
        this.participants = participants;
    }

    setStatusSuccess(){
        this.status = "success";
    }

    toggleParticipantAssign = async(idP) => {
        const val = !this.participants.find(({id}) => id === idP).isAssigned;
        const body = {
            isAssigned: val,
            id: idP
        };
        await API.put('events/participants', body).then(res => {
            this.participants.find(({id}) => id === idP).isAssigned=val;
        });
    }

    create = async() => {
        console.log(toJS(this.event));
        await API.post('event', this.event).then(res => {
          this.setStatusSuccess();
        });
    }
    getEvents = async() => {
        await API.get('events').then(res => {
            console.log(res.data);
            this.setEvents(res.data);
        });
    }
    getEvent = async(id) => {
        await API.get(`event/${id}`).then(res => {
            console.log(res);
            this.setEvent(res.data);
        });
    }
    getParticipants = async() => {
        await API.get('events/participants').then(res => {
            this.setParticipants(res.data);
        });
    }
    editEvent = async() => {
        const body = this.event;
        await API.put(`event`, body).then(res => {
            this.setStatusSuccess();
        });
    }
}


export default EventStore;
