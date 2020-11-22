import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import styles from '../Profile.module.scss';
import UpWidget from '../../../../shared/upWidget';
import {inject, observer} from 'mobx-react';

@inject(({userStore}) => ({
        firstName:  userStore.firstName,
        secondName:  userStore.secondName,
        lastName: userStore.lastName,
        setField: userStore.setField,
        country: userStore.country,
        about:  userStore.about,
        editUser: userStore.editUser,
        photoPath:  userStore.photoPath
    })
)
@observer class Profile extends React.Component  {
  render() {
      const {
          firstName,
          setField,
          country,
          about,
          editUser,
          secondName,
          lastName,
          photoPath,
      } = this.props;

    const fields = [
      {
        title: 'First Name',
        value: firstName,
        'onChange': event => setField('firstName', event.target.value)
      },
      {
        title: 'Second Name',
        value: secondName,
        'onChange': event => setField('secondName', event.target.value)
      },
      {
        title: 'Last Name',
        value: lastName,
        'onChange': event => setField('lastName', event.target.value)
      },
      {
        title: 'Country',
        value: country,
        'onChange': event => setField('country', event.target.value)
      },
      {
        title: 'About',
        value: about,
        'onChange': event => setField('about', event.target.value),
        isMultiline: true,
      }
    ].map((el) => (
        <div className={styles.field}>
          <div>{el.title}</div>
           <TextField {...el}/>
        </div>
    ));

    return (
        <div className={styles.page}>
          <div className={styles.pageTitle}> Change user info</div>

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
              {fields}
              <div className={styles.buttons}>
                <Button
                    size="small"
                    onClick={editUser}
                    variant="contained"
                    color="primary"
                >
                  Save
                </Button>
                <NavLink to="/my/profile">
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
    );
  }
};
export default Profile;

