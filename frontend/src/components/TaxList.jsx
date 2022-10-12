import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import fetchActionThunk from '../redux/taxes/thunk';
import Loading from "./Loading";
import RandomId from "../helper/Random";

const TaxList = () => {
    const dispatch = useDispatch();
    const { loadingTax, taxData, newTaxData, errors } = useSelector((states) => states.taxes);

    useEffect(() => {
        dispatch(fetchActionThunk());
    }, []);

    return (
        <section className="SectionHolder">
            <div className="flex flex-col items-center TableHolder">
                <div className="HeadingHolder">
                    <h2 className="MainHeading">Tax List</h2>
                </div>
                {loadingTax && (<Loading />)}
                {(!loadingTax && errors) && (
                    <div className="HeadingHolder">
                        <h3 className="Error">{errors}</h3>
                    </div>
                )}
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
                                <tr key={RandomId()}>
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
        </section>
    )
}

export default TaxList;
