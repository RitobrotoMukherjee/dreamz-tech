import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import SelectField from "./inputs/Select";
import TextAreaInput from "./inputs/Textarea";
import MainForm from "./Forms/MainForm";
import {
    MunicipalityProperty, MunicipalityTaxes,
    PanchayatLand, PanchayatTaxes
} from "../helper/StaticData";

const TaxForm = () => {
    // All states as object as form has multiple inputs
    const [data, setData] = useState({
        // Main States
        name: '', stateName: '', at: ''
    });

    // Row 2 states(Municipality)
    const [property, setProperty] = useState('');
    const [locationMunicipality, setLocationMunicipality] = useState('');
    const [municipalityTaxes, setMunicipalTaxes] = useState('');

    // Row 2 states(Panchayat)
    const [land, setLand] = useState('');
    const [locationPanchayat, setLocationPanchayat] = useState('');
    const [panchayatTaxes, setPanchayatTaxes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
    }

    return (
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            
            <MainForm data={data} changeHandler={setData} />
            {/* {data.at === 'Municipality' && (
                <div className="flex flex-row items-center">
                    <SelectField label="Property" options={MunicipalityProperty} value={property} setFunction={setProperty} />
                    <TextAreaInput label="Location" value={locationMunicipality} setFunction={setLocationMunicipality} />
                    <SelectField label="Taxes" options={MunicipalityTaxes} value={municipalityTaxes} setFunction={setMunicipalTaxes} />
                </div>
            )}

            {data.at === 'Panchayat' && (
                <div className="flex flex-row items-center">
                    <SelectField label="Land" options={PanchayatLand} value={land} setFunction={setLand} />
                    <TextAreaInput label="Location" value={locationPanchayat} setFunction={setLocationPanchayat} />
                    <SelectField label="Taxes" options={PanchayatTaxes} value={panchayatTaxes} setFunction={setPanchayatTaxes} />
                </div>
            )} */}
            <div className="flex flex-row items-center">
                
            </div>
        </form>
    )
}

TaxForm.propTypes = {
    states: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TaxForm;
