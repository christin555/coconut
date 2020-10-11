import React from "react";
import styles from "./buttonsPanel.module.scss";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const ButtonsPanel = (props) => {

    return (
        <div className={styles.buttons}>
            <Button size={'small'} variant={"contained"} color={"primary"}>Ok</Button>
            <NavLink to={'/my/profile'}>
                <Button size={'small'} color={'secondary'}> Cancel </Button>
            </NavLink>
        </div>
    )
}
export default ButtonsPanel;


