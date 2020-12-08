import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import s from './Header.module.css';
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";

@inject(({userStore}) => ({
    isAdmin: toJS(userStore.user.isAdmin),
}))

@observer class Header extends React.Component {

    render() {
        const{isAdmin}=this.props;
        const menuItems = [
            {group: 'my', items: ['profile'], onlyAdmin: false},
            {group:  'users', items: ['assign'], onlyAdmin: true},
            {group: 'events', items: ['browse', isAdmin && 'create'], onlyAdmin: false}
        ].map((el) => {
            const groupItems = el.items.map((item) => (
                <div className={s.menuItem}>
                    <NavLink to={`/${el.group}/${item}`}>
                        <Button>
                            {item}
                        </Button>
                    </NavLink>
                </div>
            ));
            return (
                el.onlyAdmin ? isAdmin &&
                <div className={s.menuBlock}>
                    <span className={s.title}>
                        {el.group}
                    </span>
                    <div className={s.divider}/>
                    {groupItems}
                </div> :
                    <div className={s.menuBlock}>
                    <span className={s.title}>
                        {el.group}
                    </span>
                    <div className={s.divider}/>
                    {groupItems}
                </div>

            );
        });

        return (
            <div className={s.menu}>
                {menuItems}
            </div>
        );
    }
};

export default Header;
