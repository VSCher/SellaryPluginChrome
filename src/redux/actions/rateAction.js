import request from 'axios';

export const REQUEST_RATE_STARTED = 'REQUEST_RATE_STARTED';
export const REQUEST_RATE_FINISHED = 'REQUEST_RATE_FINISHED';
export const REQUEST_RATE_ERROR = 'REQUEST_RATE_ERROR';

function requestRateStarted() {
    return {
        type: REQUEST_RATE_STARTED
    };
}

function requestRateFinished(rate) {
    return {
        type: REQUEST_RATE_FINISHED,
        rate
    };
}

function requestRateError(error) {
    return {
        type: REQUEST_RATE_ERROR,
        error
    };
}

export function requestRate() {
    return (dispatch) => {
        dispatch(requestRateStarted());

        request.get('https://shaurma-dimkos.rhcloud.com/locations?page=0&per_page=20');

        return setTimeout(() => {
            return dispatch(requestRateFinished(Date.now()));
        }, 1000);
    };
}
