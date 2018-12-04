import React from 'react';
import PropTypes from 'prop-types';
import './FlightDate.scss';

const FlightDate = ({ date }) => <div className="flightDate">{date.substr(0, 5)}</div>;
FlightDate.propTypes = {
    date: PropTypes.string,
};

FlightDate.defaultProps = {
    date: '',
};

export default FlightDate;
