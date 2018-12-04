import React from 'react';
import PropTypes from 'prop-types';
import './FlightTerminal.scss';

const FlightTerminal = ({ terminal }) => <div className="flightTerminal">{terminal}</div>;
FlightTerminal.propTypes = {
    terminal: PropTypes.string,
};

FlightTerminal.defaultProps = {
    terminal: '',
};

export default FlightTerminal;
