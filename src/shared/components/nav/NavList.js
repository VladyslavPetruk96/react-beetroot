import React, { Component } from 'react';
import style from './NavList.module.css';
import { Link } from 'react-router-dom';

class Navlist extends Component {
    render() {
        return (
            <div className={style.navlist}>
                <h2>Navlist</h2>
                    <div className={style.profile}>
                        <h2>1st n 2nd name</h2>
                        <button><Link to="/avatar">Avatar</Link></button>
                    </div>
            </div>
        )
    }
}

export default Navlist
