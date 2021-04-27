import React, { Component } from 'react';
import styles from './Avatar.module.css';

export class Avatar extends Component {
    render() {
        return (
            <>
                <div className={ styles.usersPhoto }> usersPhoto </div>
                <button className={styles.loadPhoto}>loadPhoto</button>
                <button className={styles.mainPage}><a href="/mainpage">mainPage</a></button>
            </>
        )
    }
}

export default Avatar
