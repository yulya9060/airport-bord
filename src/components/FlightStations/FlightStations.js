import React from 'react';
import PropTypes from 'prop-types';
import './FlightStations.scss';

const FlightStations = ({ stationFrom, stationTo }) => (
    <div className="FlightStations">
        {`${stationFrom.title}
                -
        ${stationTo.title}`}
    </div>
);
FlightStations.propTypes = {
    stationFrom: PropTypes.objectOf(PropTypes.string),
    stationTo: PropTypes.objectOf(PropTypes.string),
};

FlightStations.defaultProps = {
    stationFrom: { code: '', title: '' },
    stationTo: { code: '', title: '' },
};

export default FlightStations;
