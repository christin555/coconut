import React from "react";
import styles from "../Events.module.scss";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {NavLink, Redirect} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject(({eventStore}) => ({
    event:  eventStore.event,
    getEvent:  eventStore.getEvent,
    setField:  eventStore.setField,
    editEvent:  eventStore.editEvent,
    status: eventStore.status
}))

@observer class Title extends React.Component {
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
                title: 'Title',
                value: event.title,
                onChange: event => setField('title',event.target.value),
            }
        ].map((el) => (
            <div className={styles.field}>
                <div>{el.title}</div>
                <TextField {...el}/>
            </div>
        ));


        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}> Title </div>
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

export default Title;
