import React from 'react';
import AirportBord from '../AirportBoard/AirportBord';
import './Main.scss';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import Copyright from '../../components/Copyright/Copyright';

const Header = () => (
    <header className="header">
        <div className="container header__container">
            <HeaderNav />
        </div>
    </header>
);

const Container = () => (
    <section className="content main-content">
        <div className="container content__container">
            <AirportBord />
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <Copyright />
        </div>
    </footer>
);

const Main = () => (
    <div className="wrapper">
        <Header />
        <Container />
        <Footer />
    </div>
);

export default Main;
