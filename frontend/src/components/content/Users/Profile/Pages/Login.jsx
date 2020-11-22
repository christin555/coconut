import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import styles from '../Profile.module.scss';
import {inject, observer} from 'mobx-react';
import {toJS} from "mobx";

@inject(({userStore}) => ({
    oldPassword:  userStore.oldPassword,
    newPassword:  userStore.newPassword,
    repeatPassword: userStore.repeatPassword,
    setField: userStore.setField,
    checkPass: userStore.checkPass,
    isCheckedPass:  userStore.isCheckedPass,
    editUser: userStore.editUser
    })
)
@observer class Login extends React.Component {
    render() {

        const {
            oldPassword,
            newPassword,
            setField,
            repeatPassword,
            checkPass,
            isCheckedPass,
            editUser
        } = this.props;
        console.log(isCheckedPass);
        const fields = [
            {
                label: 'Current',
                value: oldPassword,
                'onChange': event => setField('oldPassword', event.target.value)
            },
            {
                label: 'New Password',
                value: newPassword,
                'onChange': event => {
                setField('newPassword', event.target.value);
                checkPass();
                }
            },
            {
                label: 'Repeat Password',
                value: repeatPassword,
                error: !isCheckedPass,
                'onChange': event => {
                    setField('repeatPassword', event.target.value);
                    checkPass();
                }
            },
        ].map((el) => (
            <div className={styles.field}>
                <div>{el.label}</div>
                <div>
                    <TextField {...el} />
                </div>
            </div>
        ));

        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}> Change password</div>
                <h4>Email: kriska****mail.ru</h4>
                {fields}
                <div className={styles.buttons}>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={editUser}
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
        );
    };
}
export default Login;

