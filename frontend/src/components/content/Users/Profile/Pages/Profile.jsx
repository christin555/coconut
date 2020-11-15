import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import UserImg from '../../../../../assets/img/user.jpg';
import styles from '../Profile.module.scss';

const Login = (props) => {
  const fields = [
    {
      title: 'First Name',
    },
    {
      title: 'Second Name',
    },
    {
      title: 'Country',
    },
    {
      title: 'About',
      isMultiline: true,
    },
  ].map((el) => (
    <div className={styles.field}>
      <div>{el.title}</div>
      <div><TextField multiline /></div>
    </div>
  ));

  return (
    <div className={styles.page}>
      <div className={styles.pageTitle}> Change password</div>

      <div className={styles.content}>
        <div className={styles.right}>
          <div className={styles.imgLoader}>
            <img src={UserImg} />
            <Button size="small" variant="contained" color="primary"> Upload </Button>
            <Button size="small" variant="contained" color="primary"> Delete </Button>
          </div>
        </div>
        <div className={styles.left}>
          {fields}
          <div className={styles.buttons}>
            <Button size="small" variant="contained" color="primary">Save</Button>
            <NavLink to="/my/profile">
              <Button size="small" color="secondary"> Cancel </Button>
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Login;
