import React from "react";
import styles from "../Users/Profile/Profile.module.scss";
import LoadImg from '../../../assets/img/load.png';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import {NavLink} from "react-router-dom";
import ButtonsPanel from "../../shared/buttonsPanel/buttonsPanel";

const ProfileMain = (props) => {

    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}>
                Registration
            </div>
            <div className={styles.content}>
                <div className={styles.right}>
                    <div className={styles.imgLoader}>
                        <img src={LoadImg}/>
                        <Button size='small' variant="contained" color="primary"> Upload </Button>
                        <Button size='small' variant="contained" color="primary"> Delete </Button>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.table}>
                        <div className={styles.tableTitle}>
                            Event information
                            <NavLink to={'profile/login'}>
                                <EditIcon size={'small'} className={styles.editIcon}/>
                            </NavLink>
                        </div>
                        <div>Email: *****</div>
                        <div>Password: *****</div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.tableTitle}>
                            Dates information
                            <NavLink to={'profile/profile'}>
                                <EditIcon size={'small'} className={styles.editIcon}/>
                            </NavLink>
                        </div>
                        <div>First Name: *****</div>
                        <div>Last Name: *****</div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.tableTitle}>
                            Participants
                            <NavLink to={'profile/pin'}>
                                <EditIcon size={'small'} className={styles.editIcon}/>
                            </NavLink>
                        </div>
                        <div className={styles.pin}>
                            <span>PIN: *****</span>
                            <Button> Assign</Button>
                        </div>
                        <ButtonsPanel/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileMain;

