import { getStateList } from '../../API/api_provider';

const FETCH_DATA = 'dreamztech/States/FETCH_DATA';

const INITIAL_DATA = {
  loading: true,
  states: [],
};

const fetchData = (loading, payload) => ({
  type: FETCH_DATA,
  payload,
  loading,
});

export const fetchApiData = () => async (dispatch) => {
  dispatch(fetchData(true, []));
  const apiData = await getStateList();
  const { data } = apiData;
  dispatch(fetchData(false, data));
};


export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case FETCH_DATA: return { ...state, loading: action.loading, stateList: [...action.payload] };
    default: return state;
  }
};

