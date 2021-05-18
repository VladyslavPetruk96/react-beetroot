import React, { Component } from 'react'
import s from './Profile.module.css';

class Profile extends Component {
    render() {
        return (
            <div className={s.profile}>
                <h2>1st n 2nd name</h2>
                <button><a href="/avatar">Ava</a></button>
            </div>
        )
    }
}

export default Profile
