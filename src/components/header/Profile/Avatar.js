import React, { Component } from 'react';
import s from './Avatar.module.css';

export class Avatar extends Component {
    render() {
        return (
            <>
                <div className={ s.usersPhoto }> usersPhoto </div>
                <button className={s.loadPhoto}>loadPhoto</button>
                <button className={s.mainPage}><a href="/mainpage">mainPage</a></button>
            </>
        )
    }
}

export default Avatar
