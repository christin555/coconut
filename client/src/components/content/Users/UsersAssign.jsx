import React from "react";
import styles from "./Users.module.scss";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import ButtonsPanel from '../../shared/buttonsPanel/buttonsPanel';

const UsersAssign = (props) => {

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
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    д
                                </TableCell>
                                <TableCell align="right">д</TableCell>
                                <TableCell align="right">д</TableCell>
                                <TableCell align="right">
                                    <Button size={'small'} color={'primary'}>
                                        Assign
                                    </Button>
                                </TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>

                <ButtonsPanel/>

            </div>
        </div>
    )
}
export default UsersAssign;

//планирование реусров
