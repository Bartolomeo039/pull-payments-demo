import React, { Component } from 'react';

import './Header.scss';
import Logo from './assets/Logo.png';

export default class Header extends Component {
    render() {

        return (<header className="header">

            <a href="/" className="header__logo">
                <img alt="QIWI" src={Logo} height="43" />
            </a>

            <ul className="header__menu">
                <li className="header__menu-item">
                    <a href="">Документация</a>
                </li>
                <li className="header__menu-item header__menu-item--active">
                    <a href="">Демо</a>
                </li>
            </ul>

            <div className="header__help">
                <div className="header__help-title">Вопросы</div>
                <a href="mailto:api_help@qiwi.com">api_help@qiwi.com</a>
            </div>

            <ul className="header__lang">
                <li className="header__menu-item">
                    <button type="button" onClick={()=>{
                        this.props.changeLang('en');
                    }} disabled={this.props.lang === 'en'}>En</button>
                </li>
                <li className="header__menu-item">
                    <button type="button" onClick={()=>{
                        this.props.changeLang('ru');
                    }} disabled={this.props.lang === 'ru'}>Ru</button>
                </li>
            </ul>

        </header>)
    }
}