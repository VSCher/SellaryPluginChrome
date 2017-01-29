import { REQUEST_RATE_ERROR } from '../actions/rateAction';
import { REQUEST_RATE_FINISHED } from '../actions/rateAction';

const initialState = {value: 0};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_RATE_ERROR :
            return callA(state, action);
        case REQUEST_RATE_FINISHED :
            return { value: state.value + 1 };
        default :
            return state;
    }
}

function callA(state, { message }) {

    return { value: state.value + 1,
    message}
}


