import INITIAL_STATE, { FETCH_DATA, ADD_DATA } from './constants';

export const fetchAction = (payload) => ({
    type: FETCH_DATA,
    payload
});

export const addAction = (payload) => ({
    type: ADD_DATA,
    payload
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA: return { ...state, ...action.payload }
        case ADD_DATA: {
            const { newTaxData } = state;
            return { ...state, newTaxData: [action.payload , ...newTaxData] };
        }
        default: return state
    }
}
