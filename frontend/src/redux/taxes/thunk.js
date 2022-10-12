import getTaxList, { syncTaxList } from "../../API/api_provider";
import { fetchAction, syncDataAction } from './taxReducer';
import INITIAL_STATE from './constants';

export const syncDataThunk = () => async (dispatch, getState) => {
    const { taxes } = getState();
    const { newTaxData, taxData } = taxes;

    // For Loading show
    dispatch(syncDataAction({ loadingTax: true }));
    const response = await syncTaxList(newTaxData);

    // Success Response
    if (response.success) {
        const { data } = response;
        dispatch(
            syncDataAction({
                loadingTax: false, newTaxData: [],
                taxData: [ ...data, ...taxData ], 
            })
        );
    }

    // Error Response
    if (response.error) {
        dispatch(syncDataAction({
            loadingTax: false, errors: response.msg
        }));
    }

}

export default () => async (dispatch) => {

    dispatch(fetchAction(INITIAL_STATE));

    const response = await getTaxList();

    if (response.success) {
        dispatch(fetchAction({
            ...INITIAL_STATE, loadingTax: false,
            taxData: response.data
        }));
    }
    if (response.error) {
        dispatch(fetchAction({
            ...INITIAL_STATE,
            loadingTax: false, errors: response.msg
        }));
    }
}
