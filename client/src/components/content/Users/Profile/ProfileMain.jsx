import React from "react";
import styles from "./Profile.module.scss";
import UserImg from '../../../../assets/img/user.jpg';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import {NavLink} from "react-router-dom";

const ProfileMain = (props) => {

    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}>
                Registration
            </div>
            <div className={styles.content}>
                <div className={styles.right}>
                    <div className={styles.imgLoader}>
                        <img src={UserImg}/>
                        <Button size='small' variant="contained" color="primary"> Upload </Button>
                        <Button size='small' variant="contained" color="primary"> Delete </Button>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.table}>
                        <div className={styles.tableTitle}>
                            Profile information
                            <NavLink to={'profile/login'}>
                                <EditIcon size={'small'} className={styles.editIcon}/>
                            </NavLink>
                        </div>
                        <div>Email: *****</div>
                        <div>Password: *****</div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.tableTitle}>
                            Login information
                            <NavLink to={'profile/profile'}>
                                <EditIcon size={'small'} className={styles.editIcon}/>
                            </NavLink>
                        </div>
                        <div>First Name: *****</div>
                        <div>Last Name: *****</div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.tableTitle}>
                            Personal Identification Number
                            <NavLink to={'profile/pin'}>
                                <EditIcon size={'small'} className={styles.editIcon}/>
                            </NavLink>
                        </div>
                        <div className={styles.pin}>
                            <span>PIN: *****</span>
                            <Button> SET PIN</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileMain;

//планирование реусров
