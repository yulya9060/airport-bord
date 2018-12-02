import Constants from '../constants';
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

const Actions = {
    // loadBoardData('Шереметьево','Уганда')
    loadBoardData(filter = Constants.BY_ARRIVE) {
        console.log('data', data);
        const { segments } = data;
        let fligths = [];
        let stations = [];
        let carriers = [];
        let thread;
        segments.forEach((segment) => {
            thread = getThread(segment);
            if (isNotExistInArray(carriers, segment.thread.carrier, 'code')) {
                carriers = [...carriers, getCarrier(segment)];
            }
            if (isNotExistInArray(stations, segment.from, 'code')) {
                stations = [...stations, getStationFrom(segment)];
            }
            if (isNotExistInArray(stations, segment.to, 'code')) {
                stations = [...stations, getStationTo(segment)];
            }
            fligths = [...fligths, getFligth(segment)];
        });

        console.log('newStation', stations);
        console.log('newСarrier', carriers);
        console.log('thread', thread);
        console.log('fligth', fligths);
        Dispatcher.dispatch({
            type: Constants.LOAD_BOARD,
            fligths,
            stations,
            carriers,
            thread,
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
