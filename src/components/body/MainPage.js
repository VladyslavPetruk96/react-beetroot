import React, { Component } from 'react';
import s from './MainPage.module.css';
import Navlist from '../header/NavList';

class MainPage extends Component {
  render() {
    return (
      <>
        <Navlist />
        <div className={s.main}>
          <div className={s.first}>
            <h2>Тестирования знаний</h2>
            <p>
              На этой странице вы можете протестировать свои знания JavaScript
            </p>
          </div>
          <div className={s.second}>
            <div>
              <h2>Язык JavaScript</h2>
              <p>Только сам JavaScript, без браузерных и иных расширений</p>
            </div>
            <button>
              <a href="/testing">Пройти тестирования</a>
            </button>
          </div>
          <div className={s.third}>
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
