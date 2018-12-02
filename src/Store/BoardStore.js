import EventEmitter from 'events';
import merge from 'react';
import Dispatcher from '../Dispatcher';
import Constants from '../constants';

const EVENT = 'BOARDSTORE_CHANGE';
// Внутренний объект для хранения состояния приложения
let store = {
    filter: Constants.BY_ARRIVE,
    search: '',
    fligths: [],
    stations: [],
    carriers: [],
    threads: [],
};

// Добавить возможности Event Emitter из Node
const BoardStore = merge(EventEmitter.prototype, {
    getStore: () => store,

    emitChange: () => this.emit(EVENT),

    addChangeListener: callback => this.on(EVENT, callback),

    removeChangeListener: callback => this.removeListener(EVENT, callback),
});

// Зарегистрировать обработчик в Диспетчере
Dispatcher.register(({ action }) => {
    switch (action.type) {
    case Constants.LOAD_BOARD:
        store = {
            ...store,
            fligths: action.fligths,
            stations: action.stations,
            carriers: action.carriers,
            threads: action.threads,
            filter: action.filter,
        };
        break;
    case Constants.FILTER_BY_DELAY:
        store = {
            ...store,
            filter: action.filter,
        };
        break;
    case Constants.SEARCH_BY_NUMBER_FLIGHT:
        store = {
            ...store,
            search: action.threadNumber,
        };
        break;
    default:
    }
    // Если Действие было обработано, создать событие EVENT
    BoardStore.emitChange();
    return store;
});

export default BoardStore;
