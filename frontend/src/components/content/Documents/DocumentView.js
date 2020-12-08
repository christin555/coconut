import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink, Redirect} from 'react-router-dom';
import styles from '../Users/Profile/Profile.module.scss';
import {inject, observer} from 'mobx-react';
import UpWidget from "../../shared/upWidget";
import {toJS} from "mobx";

@inject(({documentStore, userStore }) => ({
    document:  toJS(documentStore.document),
    getDocument: documentStore.getDocument,
    setField: documentStore.setField,
    editDocument: documentStore.editDocument,
    isAdmin: toJS(userStore.user.isAdmin),
}))
@observer class DocumentView extends React.Component  {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getDocument(id);
    }

    render() {
        const {document, setField, editDocument, isAdmin} = this.props;

        const fields = [
            {
                title: 'Event Title',
                value: document.name,
                onChange: event => setField('title',event.target.value)
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

            },
            {
                title: 'For',
                value: document.role,
                onChange: event =>setField('role',event.target.value),
            }
        ].map((el) => (
            <div className={styles.field}>
                <div>{el.title}</div>
                <TextField {...el} />
            </div>
        ));

        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}> Document</div>
                    <div>
                        {fields}
                        {isAdmin &&  <div className={styles.buttons}>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={editDocument}
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
                        }
                    </div>
                </div>
        )
    }
};
export default DocumentView;
