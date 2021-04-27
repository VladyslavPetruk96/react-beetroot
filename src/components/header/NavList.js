import React, { Component } from 'react';
import s from './NavList.module.css';
import Profile from './Profile/Profile';
import {Route} from 'react-router-dom';

class Navlist extends Component {
    render() {
        return (
            <div className={s.navlist}>
                <h2>Navlist</h2>
                <Route component={Profile}/>
            </div>
        )
    }
}

export default Navlist
