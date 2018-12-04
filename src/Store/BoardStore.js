import { EventEmitter } from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

// Внутренний объект для хранения состояния приложения
function Store() {
    this.filter = Constants.BY_ARRIVE;
    this.search = '';
    this.flights = [];
    this.stations = [];
    this.carriers = [];
    this.threads = [];
}

let store = {};

// Добавить возможности Event Emitter из Node
const BoardStore = Object.assign({}, EventEmitter.prototype, {
    getStore() {
        return store;
    },

    initialState() {
        store = { ...new Store() };
        return store;
    },

    addChangeListener(callback, event = 'BOARDSTORE_CHANGE') {
        this.on(event, callback);
    },

    emitChange(event = 'BOARDSTORE_CHANGE') {
        this.emit(event);
    },

    removeChangeListener(callback, event = 'BOARDSTORE_CHANGE') {
        this.removeListener(event, callback);
    },

});

// Зарегистрировать обработчик в Диспетчере
Dispatcher.register((action) => {
    switch (action.type) {
    case Constants.LOAD_BOARD: {
        store = {
            ...store,
            flights: action.flights,
            stations: action.stations,
            carriers: action.carriers,
            threads: action.threads,
            filter: action.filter,
        };
        BoardStore.emitChange();
        break;
    }
    case Constants.FILTER_BY_DELAY: {
        store = {
            ...store,
            filter: action.filter,
        };
        BoardStore.emitChange();
        break;
    }
    case Constants.SEARCH_BY_NUMBER_FLIGHT: {
        store = {
            ...store,
            search: action.threadNumber,
        };
        BoardStore.emitChange();
        break;
    }
    default:
    }
});

export default BoardStore;
