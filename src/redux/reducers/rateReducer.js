import { REQUEST_RATE } from 'redux/actions/rateActions';

const initialState = {value: 0};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_RATE :
            return { value: state.value + 1 };
        default :
            return state;
    }
}