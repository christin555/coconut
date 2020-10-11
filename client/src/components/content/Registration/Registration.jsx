import React from "react";
import styles from "./Registration.module.scss";
import TextField from '@material-ui/core/TextField';
import UserImg from '../../../assets/img/user.jpg';
import Button from "@material-ui/core/Button";

const Registration = (props) => {
    const fields = ['First Name', "Last Name", "Country", 'E-Mail', 'Password', 'Repeat password'].map(el => (
            <div className={styles.field}>
                <div>{el}</div>
                <div><TextField/></div>
            </div>
        )
    );

    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}> Registration</div>
            <div className={styles.content}>
                <div className={styles.right}>
                    <div className={styles.imgLoader}>
                        <img src={UserImg}/>
                        <Button size='small' variant="contained" color="primary"> Upload </Button>
                        <Button size='small' variant="contained" color="primary"> Delete </Button>
                    </div>
                </div>
                <div className={styles.left}>
                    {fields}
                </div>
            </div>
        </div>
    )
}
export default Registration;

//планирование реусров
