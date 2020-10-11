import React from "react";
import styles from "../Profile.module.scss";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const Date = (props) => {
    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}> PIN</div>

            <div className={styles.content}>
                <div className={styles.right}>

                </div>
                <div className={styles.left}>
                    <div className={styles.field}>
                        <div>PIN</div>
                        <div><TextField/></div>
                    </div>
                    <div className={styles.buttons}>
                        <Button size={'small'} variant={"contained"} color={"primary"}>Save</Button>
                        <NavLink to={'/my/profile'}>
                            <Button size={'small'} color={'secondary'}> Cancel </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Date;

//планирование реусров
