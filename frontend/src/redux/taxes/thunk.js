import getTaxList from "../../API/api_provider";
import { fetchAction } from './taxReducer';
import INITIAL_STATE from './constants';

export default () => async (dispatch) => {

    dispatch(fetchAction(INITIAL_STATE));

    const response = await getTaxList();

    if (response.success) {
        dispatch(fetchAction({
            ...INITIAL_STATE, loadingTax: false,
            taxData: response.data
        }));
    } 
    if(response.error) {
        dispatch(fetchAction({
            ...INITIAL_STATE,
            loadingTax: false, errors: response.msg
        }));
    }
}
