import React from 'react';
import AirportBoard from '../AirportBoard/AirportBoard';
import './Main.scss';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import Copyright from '../../components/Copyright/Copyright';

const Header = () => (
    <header className="Header">
        <div className="Container Header-Container">
            <HeaderNav />
        </div>
    </header>
);

const Container = () => (
    <section className="Content Main-Content">
        <div className="Container Content-Container">
            <AirportBoard />
        </div>
    </section>
);

const Footer = () => (
    <footer className="Footer">
        <div className="Container Footer-Container">
            <Copyright />
        </div>
    </footer>
);

const Main = () => (
    <div className="Wrapper">
        <Header />
        <Container />
        <Footer />
    </div>
);

export default Main;
