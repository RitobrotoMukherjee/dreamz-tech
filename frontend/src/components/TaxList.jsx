import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import fetchActionThunk from '../redux/taxes/thunk';
import Loading from "./Loading";

const TaxList = () => {
    const dispatch = useDispatch();
    const { loadingTax, taxData, newTaxData, errors } = useSelector((states) => states.taxes);

    useEffect(() => {
        dispatch(fetchActionThunk());
    }, []);

    return (
        <div className="flex flex-col items-center TableHolder">
            <div className="HeadingHolder">
                <h2 className="MainHeading">Tax List</h2>
            </div>
            {loadingTax && (<Loading />)}
            {(!loadingTax && errors) && (<p>{errors}</p>)}
            {!loadingTax && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>State</th>
                            <th>Admin Type</th>
                            <th>Location</th>
                            <th>Tax Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...newTaxData, ...taxData].map((tax) => (
                            <tr key={tax._id}>
                                <td >{tax.name}</td>
                                <td >{tax.state}</td>
                                <td >{tax.administrative_type}</td>
                                <td >{tax.location}</td>
                                <td >{tax.taxes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TaxList;
