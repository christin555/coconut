import React from "react";
import styles from "../Profile.module.scss";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";


const Login = (props) => {
    const fields = ['Current', "New Password", "Repeat Password"].map(el => (
            <div className={styles.field}>
                <div>{el}</div>
                <div><TextField/></div>
            </div>
        )
    );

    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}> Change password</div>
            <h4>Email: kriska****mail.ru</h4>
            {fields}
            <div className={styles.buttons}>
                <Button size={'small'} variant={"contained"} color={"primary"}>Save</Button>
                <NavLink to={'/my/profile'}>
                    <Button size={'small'} color={'secondary'}> Cancel </Button>
                </NavLink>
            </div>
        </div>
    )
}
export default Login;

//планирование реусров
