import React, { Component } from 'react';
import style from './MainPage.module.css';
import Navlist from '../../nav/NavList';

class MainPage extends Component {
  render() {
    return (
      <>
        <Navlist />
        <div className={style.main}>
          <div className={style.first}>
            <h2>Тестирования знаний</h2>
            <p>
              На этой странице вы можете протестировать свои знания JavaScript
            </p>
          </div>
          <div className={style.second}>
            <div>
              <h2>Язык JavaScript</h2>
              <p>Только сам JavaScript, без браузерных и иных расширений</p>
            </div>
            <button>
              <a href="/testing">Пройти тестирования</a>
            </button>
          </div>
          <div className={style.third}>
            <h2>Пояснения:</h2>
            <ul>
              <li>Тесты предполагают современные браузеры.</li>
              <li>Все настройки браузера – по умолчанию.</li>
              <li>Версия JavaScript – современная.</li>
              <li>
                Везде <span>"use strict"</span>.
              </li>
            </ul>
            <p>
              Если у вас не получилось ответить на многие вопросы – не
              расстраивайтесь. Его цель – не только проверить знания, но и
              помочь заполнить пробелы в них. Многие вопросы неочевидны и
              требуют не только знаний, но и опыта. Удачи!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
