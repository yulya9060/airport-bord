import React from 'react';
import PropTypes from 'prop-types';
import './FlightNumber.scss';

const FlightNumber = ({ thread }) => <div className="flightThread">{thread}</div>;

FlightNumber.propTypes = {
    thread: PropTypes.string,
};

FlightNumber.defaultProps = {
    thread: '',
};

export default FlightNumber;
