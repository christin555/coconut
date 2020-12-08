import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styles from './Users.module.scss';
import ButtonsPanel from '../../shared/buttonsPanel/buttonsPanel';
import {inject, observer} from 'mobx-react';
import {Redirect} from "react-router-dom";

@inject(({EventStore}) => ({
    participants: EventStore.participants,
    toggleParticipantAssign: EventStore.toggleParticipantAssign,
})
)
@observer class UsersAssignView extends React.Component {
    render() {
        const {
            participants,
            toggleParticipantAssign
        } = this.props;

        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}>
                    Assign users
                </div>
                <div className={styles.content}>
                    <TableContainer className={styles.tableContainer} component={Paper}>
                        <Table className={styles.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User</TableCell>
                                    <TableCell align="right">Event</TableCell>
                                    <TableCell align="right">Role</TableCell>
                                    <TableCell align="right">Assign</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    participants.map((el) => { return <React.Fragment>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {el.firstName}
                                            </TableCell>
                                            <TableCell align="right">
                                                {el.eventName}
                                            </TableCell>
                                            <TableCell align="right">
                                                {el.role}
                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    !el.isAssigned
                                                    &&
                                                    <Button
                                                        variant={"contained"}
                                                        size="small"
                                                        color="primary"
                                                        onClick = {()=>toggleParticipantAssign(el.id)}
                                                    >
                                                        ASSIGN
                                                    </Button>
                                                    ||
                                                    <Button
                                                        variant={"contained"}
                                                        color="secondary"
                                                        onClick = {()=>toggleParticipantAssign(el.id)}
                                                        size="small"
                                                    >
                                                        REMOVE
                                                    </Button>
                                                }
                                            </TableCell>
                                        </TableRow>
                                    </React.Fragment>})
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ButtonsPanel/>
                </div>
            </div>
        )
    }
}

export default UsersAssignView;
