import React, { Suspense } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from '../redux/taxes/taxReducer';
import { syncDataThunk } from '../redux/taxes/thunk';
import Loading from "./Loading";
import Button from "./inputs/Button";

// Lazy load as this loads a lot of other input components
const MainForm = React.lazy(() => import("./Forms/MainForm"));
const TaxList = React.lazy(() => import('./TaxList'));

const TaxForm = () => {
    const dispatch = useDispatch();

    const INITIAL_DATA = {
        // Main States
        name: '', state: '', administrative_type: '',

        // Row 2 states(Municipality)
        property: '', locationMunicipality: '', municipalityTaxes: '',

        // Row 2 states(Panchayat)
        land: '', locationPanchayat: '', panchayatTaxes: ''
    }

    // All states as object as form has multiple inputs
    const [data, setData] = useState(INITIAL_DATA);

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveData = {};
        for(const key in data) {
            if(data[key] !== '') {
                saveData[key] = data[key];
            }
        }

        // To match the fields in DB
        for(const prop in saveData) {
            if(['municipalityTaxes', 'panchayatTaxes'].includes(prop)) {
                saveData['taxes'] = saveData[prop];
                delete saveData[prop];
            }
            if(['locationMunicipality', 'locationPanchayat'].includes(prop)) {
                saveData['location'] = saveData[prop];
                delete saveData[prop];
            }
        }
        dispatch(addAction(saveData));
        setData(INITIAL_DATA);
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

    return (
        <>
            <section className="SectionHolder">
                <div className="flex flex-col w-full">
                    <Button
                        type='button' className='ButtonRight'
                        handleClick={() => dispatch(syncDataThunk())} label='Sync With DB'
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

            {data.panchayatTaxes !== 'no taxes' && (<TaxList />)}
        </>
    )
}

export default TaxForm;
