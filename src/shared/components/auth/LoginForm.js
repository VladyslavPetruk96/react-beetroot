import React from 'react'
import style from './LoginForm.module.css';
import { Link } from 'react-router-dom';



function LoginForm() {
    return (
      <div className={style.all}>
          <h2 className={style.h2}>Для входа на сайт вам необходимо авторизоваться</h2>
          <div className={style.link}>
              <Link className={style.link1} to="/createaccount">Sign Up</Link>
              <Link className={style.link2} to="/signin">Sign In</Link>
          </div>     
      </div> 
    )
}

export default LoginForm