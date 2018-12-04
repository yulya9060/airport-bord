import React from 'react';
import PropTypes from 'prop-types';
import './FlightDate.scss';

const FlightDate = ({ time, date }) => (
    <div className="FlightDate">
        {time.substr(0, 5)}
        {' '}
        {date}
    </div>
);
FlightDate.propTypes = {
    date: PropTypes.string,
    time: PropTypes.string,
};

FlightDate.defaultProps = {
    date: '',
    time: '',
};

export default FlightDate;
