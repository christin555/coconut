import React from 'react';
import {RadioGroup,FormControlLabel, Radio, Button, TextField} from '@material-ui/core';
import {NavLink, Redirect} from 'react-router-dom';
import styles from '../Users/Profile/Profile.module.scss';
import {inject, observer} from 'mobx-react';
import UpWidget from "../../shared/upWidget";

@inject(({documentStore}) => ({
    document:  documentStore.document,
    status:  documentStore.status,
    setField:  documentStore.setField,
    create:  documentStore.create,
}))
@observer class DocumentCreate extends React.Component  {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.setField('eventId', id);
    }
    render() {
        const {
            document,
            status,
            setField,
            create
        } = this.props;

        if(status === "success") return (<Redirect to="/events/browse"/>);

        const fields = [
            {
                title: 'Document Title',
                value: document.name,
                onChange: event => setField('name',event.target.value),
                type: 'text'
            },
            {
                title: 'Day',
                value: document.day,
                onChange: event => setField('day',event.target.value),
            },
            {
                title: 'Content',
                value: document.content,
                onChange: event => setField('content', event.target.value),
            }
        ].map((el) => (
            <div className={styles.field}>

                <div>{el.title}</div>
                <TextField {...el} />
            </div>
        ));

        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}> Create document</div>
                        {fields}
                <div className={styles.field}>

                    <div>For</div>
                        <RadioGroup label={"For"}
                                       value={document.roleId}
                                       onChange ={event =>setField('roleId',event.target.value)}
                                       label={'Experts'}
                   ><FormControlLabel value="1" control={<Radio />} label="Experts" />
                    <FormControlLabel value="2" control={<Radio />} label="Participants" />
                </RadioGroup>

                </div>

                        <div className={styles.buttons}>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick = {create}
                            >
                                Save
                            </Button>
                            <NavLink to="/events/browse">
                                <Button
                                    size="small"
                                    color="secondary"
                                >
                                    Cancel
                                </Button>
                            </NavLink>
                </div>

            </div>
        )
    }
};
export default DocumentCreate;
