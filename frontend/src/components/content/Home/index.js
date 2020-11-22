import React from 'react';
import styles from './Home.module.css';
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';

@inject(({userStore}) => ({
        user: toJS(userStore.user)
    })
)
@observer class Home extends React.Component{
    render() {

        return (
            <div className={styles.middle}>
                хоме
            </div>
        );
    }
}



export default Home;
