import React from 'react';
import PropTypes from 'prop-types';
import './FlightDescribe.scss';

const FlightDescribe = ({ arrival, departure, duration }) => {
    let describe = '';
    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);
    if (departureDate - arrivalDate > duration) {
        describe = 'Рейс задержан';
    } else if (new Date() < arrivalDate && new Date() > departureDate) {
        describe = 'В воздухе';
    } else if (new Date() > arrivalDate) {
        describe = 'Рейс прибыл';
    }
    return <div className="flightDescribe">{describe}</div>;
};

FlightDescribe.propTypes = {
    arrival: PropTypes.string,
    departure: PropTypes.string,
    duration: PropTypes.number,
};

FlightDescribe.defaultProps = {
    arrival: '',
    departure: '',
    duration: 0,
};

export default FlightDescribe;
