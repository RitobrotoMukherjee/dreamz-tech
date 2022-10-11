import React, { Suspense } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from '../redux/taxes/taxReducer';
import Loading from "./Loading";
import Button from "./inputs/Button";

// Lazy load as this loads a lot of other input components
const MainForm = React.lazy(() => import("./Forms/MainForm"));
const TaxList = React.lazy(() => import('./TaxList'));

const TaxForm = () => {
    const dispatch = useDispatch();

    // All states as object as form has multiple inputs
    const [data, setData] = useState({
        // Main States
        name: '', stateName: '', at: '',

        // Row 2 states(Municipality)
        property: '', locationMunicipality: '', municipalityTaxes: '',

        // Row 2 states(Panchayat)
        land: '', locationPanchayat: '', panchayatTaxes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
        // dispatch(addAction(JSON.stringify(data)));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        /**
         * update state by passing a function to access the current state
         * Using [name]: value to compute value so no creation of new variables
         * Not mutating the state so following Redux pattern
         * */
        setData(currentState => ({
            ...currentState,
            [name]: value
        }));
    }

    const SyncWithDB = () => {
        console.log('Sync');
    }

    return (
        <>
            <section className="SectionHolder">
                <div className="flex flex-col w-full">
                    <Button
                        type='button' className='ButtonRight'
                        handleClick={SyncWithDB} label='Sync With DB'
                    />
                </div>
                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <Suspense fallback={<Loading />} >
                        <MainForm data={data} handleChange={handleChange} />
                    </Suspense>
                    <div className="flex flex-row items-center">
                        <Button type="submit" className='' label='Save In Redux' />
                    </div>
                </form>
            </section>

            <TaxList />
        </>
    )
}

export default TaxForm;
