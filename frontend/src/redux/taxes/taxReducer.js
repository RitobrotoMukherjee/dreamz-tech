import INITIAL_STATE, { FETCH_DATA, ADD_DATA, SYNC_DATA } from './constants';

export const fetchAction = (payload) => ({
    type: FETCH_DATA,
    payload
});

export const addAction = (payload) => ({
    type: ADD_DATA,
    payload
});

export const syncDataAction = (payload) => ({ 
    type: SYNC_DATA,
    payload 
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA: return { ...state, ...action.payload }
        case ADD_DATA: {
            const { newTaxData } = state;
            return { ...state, newTaxData: [action.payload, ...newTaxData] };
        }
        case SYNC_DATA: return { ...state, ...action.payload }
        default: return state
    }
}
