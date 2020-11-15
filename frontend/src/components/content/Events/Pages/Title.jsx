import React from "react";
import styles from "../Profile.module.scss";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const Title = (props) => {
    const fields = ['Start Date', 'C1 Date', 'C+1 Date', 'Finish Date'].map(el => (
            <div className={styles.field}>
                <div>{el}</div>
                <div><TextField/></div>
            </div>
        )
    );

    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}> Change event</div>
            {fields}
            <div className={styles.buttons}>
                <Button size={'small'} variant={"contained"} color={"primary"}>Save</Button>
                <NavLink to={'/event/view'}>
                    <Button size={'small'} color={'secondary'}> Cancel </Button>
                </NavLink>
            </div>
        </div>
    )
}
export default Title;
