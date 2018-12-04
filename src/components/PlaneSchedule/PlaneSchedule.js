import React from 'react';
import PropTypes from 'prop-types';
import FlightRow from '../FlightRow/FlightRow';
import './PlaneSchedule.scss';

/** Поиск подстроки в слове
 * @param {string} elem
 * @param {string} substr
 * @returns {number}
 */
const findInElemSubstr = (elem, substr) => {
    const substrInLowerCase = substr.trim().toLowerCase();
    const elemInLowerCase = elem.trim().toLowerCase();
    return elemInLowerCase.indexOf(substrInLowerCase);
};

/**
 * Поиск в массиве элемента по свойству
 * @param {object} elem
 * @param {Array} threads
 * @returns {array}
 */
const findObjInArr = (elem, threads) => threads.find(el => el.uid === elem.thread);

const PlaneSchedule = ({
    flights, threads, searchStr, stations,
}) => {
    /**
     * найти все нитки рейсов, в номерах которых содержится подстрока из поиска
     */
    const searchThreadNumber = searchStr.trim().length
        ? threads.filter(el => findInElemSubstr(el.number, searchStr) >= 0)
        : [];
    /**
     * отфильтровать массив рейсов по найденным ниткам
     */
    const filterFlight = searchThreadNumber.length
        ? flights.filter(flight => findObjInArr(flight, searchThreadNumber))
        : flights;
    return (
        <ul className="flights__nav">
            {filterFlight.map(flight => (
                <FlightRow
                    key={flight.uid}
                    flights={flight}
                    threads={threads}
                    stations={stations}
                />
            ))}
        </ul>
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

PlaneSchedule.propTypes = {
    flights: PropTypes.arrayOf(
        PropTypes.shape({
            arrival: PropTypes.string,
            arrival_terminal: PropTypes.string,
            departure: PropTypes.string,
            from: PropTypes.string,
            thread: PropTypes.string,
            uid: PropTypes.string,
            to: PropTypes.string,
            duration: PropTypes.number,
        }),
    ),
    threads: PropTypes.arrayOf(PropTypes.shape(threadsObj)),
    searchStr: PropTypes.string,
    stations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

PlaneSchedule.defaultProps = {
    flights: [],
    threads: [],
    searchStr: '',
    stations: [],
};

export default PlaneSchedule;
