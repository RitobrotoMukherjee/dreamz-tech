import React, { Suspense } from "react";
import { useState } from "react";
import Loading from "./Loading";

// Lazy load as this loads a lot of other input components
const MainForm = React.lazy(() => import( "./Forms/MainForm" ));

const TaxForm = () => {
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
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <Suspense fallback={<Loading />} >
                <MainForm data={data} handleChange={handleChange} />
            </Suspense>
            <div className="flex flex-row items-center">
                
            </div>
        </form>
    )
}

export default TaxForm;
