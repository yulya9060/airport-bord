import Constants from '../Constants';
import Dispatcher from '../Dispatcher';
import fromto from '../data/fromto.json';
import tofrom from '../data/tofrom.json';
import {
    getThread,
    getCarrier,
    isNotExistInArray,
    getStationFrom,
    getStationTo,
    getFligth,
} from '../helpers/index';

const Actions = {
    loadBoardDataFromTo(filter) {
        const { segments } = fromto;
        let flights = [];
        let stations = [];
        let carriers = [];
        let threads = [];
        segments.forEach((segment) => {
            threads = [...threads, getThread(segment)];
            if (isNotExistInArray(carriers, segment.thread.carrier, 'code')) {
                carriers = [...carriers, getCarrier(segment)];
            }
            if (isNotExistInArray(stations, segment.from, 'code')) {
                stations = [...stations, getStationFrom(segment)];
            }
            if (isNotExistInArray(stations, segment.to, 'code')) {
                stations = [...stations, getStationTo(segment)];
            }
            flights = [...flights, getFligth(segment)];
        });
        Dispatcher.dispatch({
            type: Constants.LOAD_BOARD,
            flights,
            stations,
            carriers,
            threads,
            filter,
        });
    },

    loadBoardDataToFrom(filter) {
        const { segments } = tofrom;
        let flights = [];
        let stations = [];
        let carriers = [];
        let threads = [];
        segments.forEach((segment) => {
            threads = [...threads, getThread(segment)];
            if (isNotExistInArray(carriers, segment.thread.carrier, 'code')) {
                carriers = [...carriers, getCarrier(segment)];
            }
            if (isNotExistInArray(stations, segment.from, 'code')) {
                stations = [...stations, getStationFrom(segment)];
            }
            if (isNotExistInArray(stations, segment.to, 'code')) {
                stations = [...stations, getStationTo(segment)];
            }
            flights = [...flights, getFligth(segment)];
        });
        Dispatcher.dispatch({
            type: Constants.LOAD_BOARD,
            flights,
            stations,
            carriers,
            threads,
            filter,
        });
    },

    filterByType(filter) {
        switch (filter) {
        case Constants.BY_ARRIVE:
            this.loadBoardDataToFrom(filter);
            break;
        case Constants.BY_DEPART:
            this.loadBoardDataFromTo(filter);
            break;
        default:
            break;
        }
    },

    searchByNumber(threadNumber) {
        Dispatcher.dispatch({
            type: Constants.SEARCH_BY_NUMBER_FLIGHT,
            threadNumber,
        });
    },
};

export default Actions;
