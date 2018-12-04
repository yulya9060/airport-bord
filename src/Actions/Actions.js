import Constants from '../Constants';
import Dispatcher from '../Dispatcher';
import data from '../data/data.json';
import {
    getThread,
    getCarrier,
    isNotExistInArray,
    getStationFrom,
    getStationTo,
    getFligth,
} from '../helpers/index';
// import api from '../Api';

const Actions = {
    // loadBoardData('Шереметьево','Уганда')
    loadBoardData(filter = Constants.BY_ARRIVE) {
        // api.getAirportBord()
        //     .then((response) => {
        //         console.log('response', response.data);
        //     })
        //     .catch((err) => {
        //         console.log('err', err.toString());
        //     });
        const { segments } = data;
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
            this.loadBoardData(filter);
            break;
        case Constants.BY_DEPART:
            this.loadBoardData(filter);
            break;
        case Constants.BY_DELAY:
            Dispatcher.dispatch({
                type: Constants.FILTER_BY_DELAY,
                filter,
            });
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
