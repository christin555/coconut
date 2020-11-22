import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.scss';
import {inject, observer} from 'mobx-react';
import UpWidget from "../../../shared/upWidget";

@inject(({userStore}) => ({
      id:  userStore.id,
      firstName:  userStore.firstName,
      secondName:  userStore.secondName,
      lastName: userStore.lastName,
      country: userStore.country,
      about:  userStore.about,
      photoPath:  userStore.photoPath,
      email:  userStore.email,
      setField:  userStore.setField,
      editUser:  userStore.editUser,
    })
)
@observer class ProfileMain extends React.Component {
  render() {
    const {
      id,
      firstName,
      country,
      about,
      secondName,
      lastName,
      photoPath,
      email,
      setField,
      editUser
    } = this.props;

    return(
        <div className={styles.page}>
          <div className={styles.pageTitle}>
            Profile
          </div>
          <div className={styles.content}>
            <div className={styles.right}>
              <div className={styles.imgLoader}>
                  <UpWidget
                      photoPath = {photoPath}
                      funcUpload={(data)=>{
                          setField('photoPath',data);
                          editUser();
                      }}
                      funcDelete={()=>{
                          setField('photoPath',null);
                          editUser();
                      }}
                  />
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.table}>
                <div className={styles.tableTitle}>
                  Profile information
                  <NavLink to="profile/login">
                    <EditIcon size="small" className={styles.editIcon} />
                  </NavLink>
                </div>
                <div>Email: {email}</div>
                <div>Password: *****</div>
              </div>
              <div className={styles.table}>
                <div className={styles.tableTitle}>
                  Login information
                  <NavLink to="profile/profile">
                    <EditIcon size="small" className={styles.editIcon} />
                  </NavLink>
                </div>
                <div>First Name: {firstName}</div>
                <div>Second Name: {secondName}</div>
                <div>Last Name: {lastName}</div>
                <div>Country: {country}</div>
                <div>About: {about}</div>
              </div>
              <div className={styles.table}>
                <div className={styles.tableTitle}>
                  Personal Identification Number
                  <NavLink to="profile/pin">
                    <EditIcon size="small" className={styles.editIcon} />
                  </NavLink>
                </div>
                <div className={styles.pin}>
                  <span>PIN: {id}</span>
                  <Button> SET PIN</Button>
                </div>

              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ProfileMain;
