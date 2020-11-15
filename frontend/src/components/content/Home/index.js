import React from 'react';
import styles from './Home.module.css';
import {inject, observer} from 'mobx-react';

@inject(stores => ({
        user: stores.userStore.user
    })
)
@observer class Home extends React.Component{
    render() {
        const {user} =this.props;
        return (
            <div className={styles.middle}>
                хоме {user}
            </div>
        );
    }
}



export default Home;
