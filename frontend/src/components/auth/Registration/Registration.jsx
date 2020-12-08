import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Registration.module.scss';
import UserImg from '../../../assets/img/user.jpg';
import {inject, observer} from 'mobx-react';
import {Redirect} from "react-router-dom";
import UpWidget from "../../shared/upWidget";

@inject(stores => ({
    auth:  stores.authStore.auth,
    firstName: stores.authStore.firstName,
    lastName: stores.authStore.lastName,
    secondName: stores.authStore.secondName,
    email: stores.authStore.email,
    country: stores.authStore.country,
    password: stores.authStore.password,
    repeatPassword: stores.authStore.repeatPassword,
    setField:  stores.authStore.setField,
    loginSuccess: stores.authStore.loginSuccess,
    checkPass:  stores.authStore.checkPass,
    isCheckedPass:  stores.authStore.isCheckedPass,
    photoPath:  stores.authStore.photoPath
    })
)
@observer class Registration extends React.Component {
    render() {
        const {
            auth,
            email,
            password,
            setField,
            loginSuccess,
            firstName,
            secondName,
            lastName,
            country,
            repeatPassword,
            isCheckedPass,
            checkPass,
            photoPath
        } = this.props;

        if(loginSuccess) return (<Redirect to="/home"/>);

        const fields = [
            {
                label: 'First Name',
                onChange: event => setField('firstName', event.target.value),
                value: firstName
            },
            {
                label: 'Last Name',
                onChange: event => setField('lastName', event.target.value),
                value: lastName
            },
            {
                label: 'Second Name',
                onChange: event => setField('secondName', event.target.value),
                value: secondName
            },
            {
                label: 'E-Mail',
                onChange: event => setField('email', event.target.value),
                value: email
            },
            {
                label: 'Country',
                onChange: event => setField('country', event.target.value),
                value: country
            },
            {
                label: 'Password',
                'onChange': event => {
                    setField('password', event.target.value);
                    checkPass();
                },
                value: password
            },
            {
                label: 'Repeat password',
                error: !isCheckedPass,
                'onChange': event => {
                    setField('repeatPassword', event.target.value);
                    checkPass();
                },
                value: repeatPassword, state: isCheckedPass
            }
        ].map((el) => (
            <div className={styles.field}>
                <div>{el.label}</div>
                <div><TextField {...el}/></div>
            </div>
        ));

        return (
            <div className={styles.page}>
                <div className={styles.pageTitle}> Registration</div>
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
                        <Button onClick={auth} variant="contained" color="primary">Ok</Button>
                        <Button variant="contained" color="primary">Cancel</Button>
                    </div>
                    </div>

                </div>
            </div>
        );
    }
};
export default Registration;
