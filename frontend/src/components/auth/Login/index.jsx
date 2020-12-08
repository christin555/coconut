import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Login.module.scss';
import {inject, observer} from 'mobx-react';
import {NavLink, Redirect} from "react-router-dom";

@inject(stores => ({
    login: stores.authStore.login,
    password: stores.authStore.password,
    email: stores.authStore.email,
    setField:  stores.authStore.setField,
    loginSuccess: stores.authStore.loginSuccess,
    })
)
@observer class Login extends React.Component {
    render() {

        const {
            login,
            email,
            password,
            setField,
            loginSuccess
        } = this.props;

        if(loginSuccess) return (<Redirect to="/"/>);

        const fields = [
            {label: 'E-Mail', onchange: event => setField('email', event.target.value), value: email},
            {label: 'Password', onchange: event => setField('password', event.target.value), value: password}
        ].map((el) => (
            <div className={styles.field}>
                <div>{el.label}</div>
                <div>
                    <TextField
                        value={el.value}
                        onChange={el.onchange}
                    />
                </div>
            </div>
        ));

        return (
            <div className={styles.content}>
                {fields}
                <div className={styles.buttons}>
                    <Button onClick={login} variant="contained" color="primary">Sign in</Button>
                    <NavLink to="/registration">
                        <Button variant="contained" color="primary">Sign up</Button>
                    </NavLink>
                </div>
            </div>
        );
    };
}
export default Login;
