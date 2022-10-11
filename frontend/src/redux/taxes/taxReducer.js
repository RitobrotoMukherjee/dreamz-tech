import INITIAL_STATE, { FETCH_DATA } from './constants';

export const fetchAction = (payload) => ({
    type: FETCH_DATA,
    payload
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            // console.log(action);
            return { ...state, ...action.payload }
        }
        default: return state
    }
}
