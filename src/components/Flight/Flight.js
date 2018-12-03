import React from 'react';
import PropTypes from 'prop-types';
import './Flight.scss';
import { getElementByProperty } from '../../helpers/index';

const Flight = ({ flights, thread, stations }) => {
    const stationFrom = getElementByProperty(stations, 'code', flights, 'from');
    const stationTo = getElementByProperty(stations, 'code', flights, 'to');
    console.log('stationFrom', stationFrom);
    console.log('stationTo', stationTo);
    return (
        <li className="nav-link">
            <div>{flights.arrival}</div>
            <div>{thread.number}</div>
            <div>{flights.arrival_terminal}</div>
            <div>{`${stationFrom.title} -> ${stationTo.title}`}</div>
            <div />
        </li>
    );
};

Flight.propTypes = {
    flights: PropTypes.shape({
        arrival: PropTypes.string,
        arrival_terminal: PropTypes.string,
        departure: PropTypes.string,
        from: PropTypes.string,
        thread: PropTypes.string,
        uid: PropTypes.string,
        to: PropTypes.string,
        duration: PropTypes.number,
    }),
    thread: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    stations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

Flight.defaultProps = {
    flights: {
        arrival: '',
        arrival_terminal: '',
        departure: '',
        from: '',
        thread: '',
        uid: '',
        to: '',
        duration: 0,
    },
    thread: {},
    stations: [],
};

export default Flight;
