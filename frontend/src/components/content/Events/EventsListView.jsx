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
import styles from './Events.module.scss';
import {inject, observer} from 'mobx-react';
import {toJS} from "mobx";
import dayjs from 'dayjs';

@inject(({EventStore, userStore}) => ({
  events:  toJS(EventStore.events),
  user: toJS(userStore.user),
}))
@observer class EventsListView extends React.Component {

  render() {
    const {user} = this.props;
    const events = this.props.events.map(element => {
      return(
          <TableRow>
            <TableCell>
                <NavLink to={`/event/${element.id}`}>
                    {element.name}
                </NavLink>
            </TableCell>
            <TableCell>
              {dayjs(element.startDate).format('DD/MM/YYYY')} - {dayjs(element.finishDate).format('DD/MM/YYYY')}
            </TableCell>
            <TableCell >{element.countMembers > 0 ? element.countMembers : '-' }</TableCell>
              { !user.isAdmin && <TableCell> {element.myRole} </TableCell>}
          </TableRow>
      )
    });

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
                    <TableCell>Event</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Participants</TableCell>
                      { !user.isAdmin && <TableCell>My role</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events}
                </TableBody>
              </Table>
            </TableContainer>
              {user.isAdmin && <div className={styles.button}>
                  <NavLink to="/events/create">
                      <Button
                          variant="contained"
                          size="small"
                          color="primary">
                          Add
                      </Button>
                  </NavLink>
              </div>
              }
          </div>
        </div>
    );
  }
}

export default EventsListView;
