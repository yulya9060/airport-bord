import { v4 } from 'uuid';

/**
 * Проверяет на существование объекта с данным свойством в массиве
 * @param {array} arr
 * @param {object} item
 * @param {some} key
 * @return {boolean}
 */
export const isNotExistInArray = (arr, item, key) => {
    if (arr.length > 0) {
        return !arr.some(el => el[key] === item[key]);
    }
    return arr.length === 0;
};

/**
 * Возвращает новый объект c ниткой рейса
 * @param {object} segment
 * @return {object}
 */
export const getThread = (segment) => {
    const thread = segment.thread || {};
    return {
        uid: thread.uid,
        title: thread.title,
        number: thread.number,
        short_title: thread.short_title,
        code_carrier: thread.carrier.code,
        transport_type: thread.transport_type,
        vehicle: thread.vehicle,
    };
};

/**
 *  Возвращает новый объект с перевозчиками
 * @param {object} segment
 * @return {object}
 */
export const getCarrier = (segment) => {
    const carrier = segment.thread.carrier || {};
    return {
        title: carrier.title,
        code: carrier.code,
    };
};

/**
 * Возвращает новыйобъект со станциями отправления
 * @param {object} segment
 * @return {object}
 */
export const getStationFrom = (segment) => {
    const stationFrom = segment.from || {};
    return {
        title: stationFrom.title,
        code: stationFrom.code,
    };
};

/**
 * Возвращает новыйобъект со станциями назначения
 * @param {object} segment
 * @return {object}
 */
export const getStationTo = (segment) => {
    const stationTo = segment.to || {};
    return {
        title: stationTo.title,
        code: stationTo.code,
    };
};

/**
 * Возвращает новый объект с информацией по рейсу
 * @param {object} segment
 * @return {object}
 */
export const getFligth = (segment) => {
    const fligth = segment || {};
    return {
        arrival: fligth.arrival,
        arrival_terminal: fligth.arrival_terminal,
        departure: fligth.departure,
        from: fligth.from.code,
        thread: fligth.thread.uid,
        uid: v4(),
        to: fligth.to.code,
        duration: fligth.duration,
        start_date: fligth.start_date,
    };
};

/**
 * Возвращает первый найденный элемент в массиве с указанным свойством
 * @param {*} arr
 * @param {*} arrProperty
 * @param {*} obj
 * @param {*} objProperty
 */
// eslint-disable-next-line max-len
export const getElementByProperty = (arr, arrProperty, obj, objProperty) => arr.find(el => el[arrProperty] === obj[objProperty]);
