import { v4 } from 'uuid';

export const isNotExistInArray = (arr, item, key) => {
    if (arr.length > 0) {
        return !arr.some(el => el[key] === item[key]);
    }
    return arr.length === 0;
};

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

export const getCarrier = (segment) => {
    const carrier = segment.thread.carrier || {};
    return {
        title: carrier.title,
        code: carrier.code,
    };
};

export const getStationFrom = (segment) => {
    const stationFrom = segment.from || {};
    return {
        title: stationFrom.title,
        code: stationFrom.code,
    };
};

export const getStationTo = (segment) => {
    const stationTo = segment.to || {};
    return {
        title: stationTo.title,
        code: stationTo.code,
    };
};

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

// eslint-disable-next-line max-len
export const getElementByProperty = (arr, arrProperty, obj, objProperty) => arr.find(el => el[arrProperty] === obj[objProperty]);
