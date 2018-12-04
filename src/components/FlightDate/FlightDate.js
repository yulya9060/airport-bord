import React from 'react';
import PropTypes from 'prop-types';
import './FlightDate.scss';

const FlightDate = ({ date }) => {
    const formatDate = new Date(date);
    const hour = formatDate.getHours();
    const minutes = formatDate.getMinutes();
    return (
        <div className="flightDate">
            {hour}
:
            {minutes}
        </div>
    );
};
FlightDate.propTypes = {
    date: PropTypes.string,
};

FlightDate.defaultProps = {
    date: '',
};

export default FlightDate;
