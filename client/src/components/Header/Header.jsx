import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = (props) => {

    const menuItems = [
        {group: 'my', items: ['profile', 'events']},
        {group: 'users', items: ['browse', 'create', 'assign']},
        {group: 'events', items: ['browse', 'create', 'assign']},
        {group: 'documents', items: ['browse', 'create', 'Download']}
    ].map(el => {
        const groupItems = el.items.map(item => (
            <div className={s.menuItem}>
                <NavLink to={'/' + el.group + '/' + item}>
                    <Button>
                        {item}
                    </Button>
                </NavLink>
            </div>
        ));
        return (
            <div className={s.menuBlock}>
                  <span className={s.title}>
                      {el.group}
                  </span>
                <div className={s.divider}/>
                {groupItems}
            </div>
        )
    });

    return <div className={s.menu}>
        {menuItems}
    </div>
}
export default Header;
