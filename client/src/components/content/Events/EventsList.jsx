import React from "react";
import styles from "./Events.module.scss";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const EventsList = (props) => {

    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}>
                Events
            </div>
            <div className={styles.content}>
                <TableContainer className={styles.tableContainer} component={Paper}>
                    <Table className={styles.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell align="right">Event</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Participants</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    д
                                </TableCell>
                                <TableCell align="right">д</TableCell>
                                <TableCell align="right">д</TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>

                <div className={styles.button}>

                    <NavLink to={'/events/create'}>
                        <Button variant="contained" size={'small'} color={'primary'}> Add </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default EventsList;

//планирование реусров
