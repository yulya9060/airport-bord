import React from 'react';
import PropTypes from 'prop-types';
import './FlightDescribe.scss';

const FlightDescribe = ({
    arrival, departure, duration, startDate,
}) => {
    let describe = '';
    let arrivalDate = `${startDate}T${arrival}`;
    arrivalDate = +new Date(arrivalDate);
    let departureDate = `${startDate}T${departure}`;
    departureDate = +new Date(departureDate);
    if (departureDate - arrivalDate > duration) {
        describe = 'Рейс задержан';
    } else if (+new Date() > arrivalDate) {
        describe = 'Рейс прибыл';
    }
    return <div className="flightDescribe">{describe}</div>;
};

FlightDescribe.propTypes = {
    arrival: PropTypes.string,
    departure: PropTypes.string,
    duration: PropTypes.number,
    startDate: PropTypes.string,
};

FlightDescribe.defaultProps = {
    arrival: '',
    departure: '',
    duration: 0,
    startDate: '',
};

export default FlightDescribe;
