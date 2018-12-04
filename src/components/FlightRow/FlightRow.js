import React from 'react';
import PropTypes from 'prop-types';
import './FlightRow.scss';
import { getElementByProperty } from '../../helpers/index';
import FlightDate from '../FlightDate/FlightDate';
import FlightStations from '../FlightStations/FlightStations';
import FlightNumber from '../FlightNumber/FlightNumber';
import FlightTerminal from '../FlightTerminal/FlightTerminal';
import FlightDescribe from '../FlightDescribe/FlightDescribe';

const FlightRow = ({ flights, threads, stations }) => {
    const stationFrom = stations.length
        ? getElementByProperty(stations, 'code', flights, 'from')
        : [];
    const stationTo = stations.length ? getElementByProperty(stations, 'code', flights, 'to') : [];
    const thread = threads ? getElementByProperty(threads, 'uid', flights, 'thread') : [];
    return (
        <li className="nav-link">
            <FlightDate time={flights.arrival} date={flights.start_date} />
            <FlightStations stationFrom={stationFrom} stationTo={stationTo} />
            <FlightNumber thread={thread.number} />
            <FlightTerminal terminal={flights.arrival_terminal} />
            <FlightDescribe
                startDate={flights.start_date}
                arrival={flights.arrival}
                departure={flights.departure}
                duration={flights.duration}
            />
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

FlightRow.propTypes = {
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

FlightRow.defaultProps = {
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

export default FlightRow;
