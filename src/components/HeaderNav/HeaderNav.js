import React from 'react';
import './HeaderNav.scss';

const HeaderNav = () => (
    <nav className="header-nav">
        <li className="header__item header__item_active">
            <button type="submit" className="link">
                Табло рейсов
            </button>
        </li>
        <li className="header__item">
            <button type="submit" className="link">
                Услуги
            </button>
        </li>
        <li className="header__item">
            <button type="submit" className="link">
                Схема аэропорта
            </button>
        </li>
    </nav>
);

export default HeaderNav;
