import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import fetchActionThunk from '../redux/taxes/thunk';
import Loading from "./Loading";

const TaxList = () => {
    const dispatch = useDispatch();
    const { loadingTax, taxData, errors } = useSelector((states) => states.taxes);

    useEffect(() => {
        dispatch(fetchActionThunk());
    }, []);

    return (
        <>
            <h1>Tax List</h1>
            {loadingTax && (<Loading />)}
            {(!loadingTax && errors) && (<p>{errors}</p>)}
            {!loadingTax && (
                taxData.map((tax) => (
                    <p key={tax._id}>{tax.name}</p>
                ))
            )}
        </>
    )
}

export default TaxList;
