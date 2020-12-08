import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import styles from '../Events/Events.module.scss';
import {inject, observer} from 'mobx-react';
import {toJS} from "mobx";
import dayjs from 'dayjs';

@inject(({documentStore, userStore}) => ({
    documents:  toJS(documentStore.documents),
    getDocuments: documentStore.getDocuments,
    user: toJS(userStore.user),
}))

@observer class DocumentsView extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getDocuments(id);
    }

    render() {
        const {user} = this.props;
        const {eventid} = this.props.match.params;
        const documents = this.props.documents.map(element => {
            return(
                <TableRow>
                    <TableCell>
                        <NavLink to={`/document/${element.id}`}>
                            {element.name}
                        </NavLink>
                    </TableCell>
                    <TableCell>
                        {element.day}
                    </TableCell>
                    <TableCell >{element.role}</TableCell>
                </TableRow>
            )
        });

        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}>
                    Documents of event
                </div>
                <div className={styles.content}>
                    <TableContainer className={styles.tableContainer} component={Paper}>
                        <Table className={styles.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Document</TableCell>
                                    <TableCell>Day</TableCell>
                                    <TableCell>For</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {documents}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {user.isAdmin && <div className={styles.button}>
                        <NavLink to={`documents/create`}>
                            <Button variant="contained" size="small" color="primary"> Add </Button>
                        </NavLink>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default DocumentsView;
