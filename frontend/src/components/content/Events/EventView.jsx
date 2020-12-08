import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from 'react-router-dom';
import LoadImg from '../../../assets/img/load.png';
import styles from '../Users/Profile/Profile.module.scss';
import ButtonsPanel from '../../shared/buttonsPanel/buttonsPanel';
import {inject, observer} from 'mobx-react';
import {toJS} from "mobx";
import dayjs from 'dayjs';
import UpWidget from "../../shared/upWidget";
import TableRow from "@material-ui/core/TableRow";

@inject(({EventStore, userStore}) => ({
  event:  toJS(EventStore.event),
  setField: EventStore.setField,
  editEvent:  EventStore.editEvent,
  user: toJS(userStore.user),
}))

@observer class EventView extends React.Component {
  render() {
    const {event, setField, editEvent, user} = this.props;
    return (
        <div className={styles.page}>
          <div className={styles.pageTitle}>
            Event
          </div>
          <div className={styles.content}>
            <div className={styles.right}>
              <div className={styles.imgLoader}>
                <UpWidget
                    photoPath = {event.photoPath}
                    funcUpload={(data)=>{
                      setField('photoPath',data);
                      editEvent();
                    }}
                    funcDelete={()=>{
                      setField('photoPath',null);
                      editEvent();
                    }}
                    canUpdate={user.isAdmin}
                />
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.table}>
                <div className={styles.tableTitle}>
                  Event information
                  {
                    user.isAdmin &&
                    <NavLink to={`${event.id}/title`}>
                      <EditIcon size="small" className={styles.editIcon}/>
                    </NavLink>
                  }
                </div>
                <div>Title: {event.name}</div>
              </div>
              <div className={styles.table}>
                <div className={styles.tableTitle}>
                  Dates information
                  {
                    user.isAdmin && <NavLink to={`${event.id}/date`}>
                      <EditIcon size="small" className={styles.editIcon}/>
                    </NavLink>
                  }
                </div>
                <div>Start Date:  {dayjs(event.startDate).format('DD/MM/YYYY')}</div>
                <div>C1 Date:  {dayjs(event.C1Date).format('DD/MM/YYYY')}</div>
                <div>C+1 Date:  {dayjs(event.C_1Date).format('DD/MM/YYYY')}</div>
                <div>Finish Date:  {dayjs(event.finishDate).format('DD/MM/YYYY')}</div>
              </div>
              <div className={styles.table}>
                <div className={styles.tableTitle}>
                  Participants
                  {
                    user.isAdmin && <NavLink to="participants">
                      <EditIcon size="small" className={styles.editIcon}/>
                    </NavLink>
                  }
                </div>
                <div className={styles.pin}>
                  <span>Participants: {event.count || 0}</span>
                  {
                    user.isAdmin &&
                    <NavLink to = {`/users/assign`}>
                      <Button> Assign </Button>
                    </NavLink>
                  }
                </div>
              </div>
              <div className={styles.buttons}>
                <NavLink  to={`${event.id}/documents`}>
                <Button
                    size="small"
                    color="primary"
                >
                  Documents
                </Button>
              </NavLink>
                {
                  user.isAdmin && <NavLink to={`${event.id}/documents/create`}>
                    <Button
                        size="small"
                        color="primary"
                    >
                      Create document
                    </Button>
                  </NavLink>
                }
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default EventView;
