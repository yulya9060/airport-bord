import React from 'react';
import './HeaderNav.scss';

const HeaderNav = () => (
    <nav className="Header-Nav">
        <li className="Header-Item Header-Item_active">
            <button type="submit" className="link">
                Табло рейсов
            </button>
        </li>
        <li className="Header-Item">
            <button type="submit" className="link">
                Услуги
            </button>
        </li>
        <li className="Header-Item">
            <button type="submit" className="link">
                Схема аэропорта
            </button>
        </li>
    </nav>
);

export default HeaderNav;
