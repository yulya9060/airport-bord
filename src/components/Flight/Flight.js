import React from 'react';
import PropTypes from 'prop-types';
import './Flight.scss';
import { getElementByProperty } from '../../helpers/index';

const Flight = ({ flights, threads, stations }) => {
    const stationFrom = getElementByProperty(stations, 'code', flights, 'from');
    const stationTo = getElementByProperty(stations, 'code', flights, 'to');
    const thread = getElementByProperty(threads, 'uid', flights, 'thread');
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

const threadsObj = {
    uid: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.string,
    short_title: PropTypes.string,
    codeCarrier: PropTypes.number,
    transport_type: PropTypes.string,
    vehicle: PropTypes.string,
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
    threads: PropTypes.arrayOf(PropTypes.shape(threadsObj)),
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
    threads: [],
    stations: [],
};

export default Flight;
