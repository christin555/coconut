import React from "react";
import styles from "../Events.module.scss";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {NavLink, Redirect} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {toJS} from "mobx";
import dayjs from "dayjs";

@inject(({eventStore}) => ({
    event:  eventStore.event,
    getEvent:  eventStore.getEvent,
    setField:  eventStore.setField,
    editEvent:  eventStore.editEvent,
    status: eventStore.status
}))

@observer class Date extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getEvent(id);
    }

    render() {
        const {
            event,
            setField,
            editEvent,
            status,
        } = this.props;

        if(status==="success") return (<Redirect to={`/event/${event.id}`}/>);

        const fields = [
            {
                title: 'Start Date',
                value: dayjs(event.startDate).format('YYYY-MM-DD'),
                onChange: event => setField('startDate',event.target.value),
                type: 'date'
            },
            {
                title: 'C1 Date',
                value: dayjs(event.C1Date).format('YYYY-MM-DD'),
                onChange: event => setField('C1Date', event.target.value),
                type: 'date'
            },
            {
                title: 'C+1 Date',
                value: dayjs(event.C_1Date).format('YYYY-MM-DD'),
                onChange: event =>setField('C_1Date',event.target.value),
                type: 'date'
            },
            {
                title: 'Finish Date',
                onChange: event =>setField('finishDate',event.target.value),
                value: dayjs(event.finishDate).format('YYYY-MM-DD'),
                type: 'date'
            },
        ].map((el) => (
            <div className={styles.field}>
                <div>{el.title}</div>
                <TextField {...el}/>
            </div>
        ));


        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}> DATES</div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        {fields}
                        <div className={styles.buttons}>
                            <Button
                                size={'small'}
                                variant={"contained"}
                                color={"primary"}
                                onClick={editEvent}
                            >
                                Save
                            </Button>
                            <NavLink to={`/event/${event.id}`}>
                                <Button
                                    size={'small'}
                                    color={'secondary'}>
                                    Cancel
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Date;
