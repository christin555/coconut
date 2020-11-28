import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import styles from '../Users/Profile/Profile.module.scss';
import {inject, observer} from 'mobx-react';
import UpWidget from "../../shared/upWidget";

@inject(({EventStore}) => ({
    title:  EventStore.event.title,
    startDate:  EventStore.event.startDate,
    c1Date:  EventStore.event.c1Date,
    c_1Date:  EventStore.event.c_1Date,
    finishDate:  EventStore.event.startDate,
    setField: EventStore.setField,
    create: EventStore.create,
    photoPath: EventStore.event.photoPath
    }))
@observer class EventsCreateView extends React.Component  {

 render() {
   const {
     title,
     startDate,
     c1Date,
     c_1Date,
     finishDate,
     setField,
     create,
     photoPath
   } = this.props;

   const fields = [
     {
       title: 'Event Title',
       value: title,
       onChange: event => setField('title',event.target.value),
       type: 'text'
     },
     {
       title: 'Start Date',
       value: startDate,
       onChange: event => setField('startDate',event.target.value),
       type: 'date'
     },
     {
       title: 'C1 Date',
       value: c1Date,
       onChange: event => setField('c1Date', event.target.value),
       type: 'date'
     },
     {
       title: 'C+1 Date',
       value: c_1Date,
       onChange: event =>setField('c_1Date',event.target.value),
       type: 'date'
     },
     {
       title: 'Finish Date',
       onChange: event =>setField('finishDate',event.target.value),
       value: finishDate,
       type: 'date'
     },
   ].map((el) => (
       <div className={styles.field}>

         <div>{el.title}</div>
         <TextField {...el} />
       </div>
   ));

   return (
       <div className={styles.page}>
         <div className={styles.pageTitle}> Change password</div>
         <div className={styles.content}>
           <div className={styles.right}>
             <div className={styles.imgLoader}>
                 <UpWidget
                     photoPath = {photoPath}
                     funcUpload={(data)=>{
                         setField('photoPath',data);
                     }}
                     funcDelete={()=>{
                         setField('photoPath',null);
                     }}
                 />
             </div>
           </div>

           <div className={styles.left}>
             {fields}
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
         </div>

       </div>
   )
 }
};
export default EventsCreateView;
