import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import InputField from "./inputs/Input";
import SelectField from "./inputs/Select";
import DataList from "./inputs/DataList";
import TextAreaInput from "./inputs/Textarea";
import {
    AdministrativeType, MunicipalityProperty, MunicipalityTaxes,
    PanchayatLand, PanchayatTaxes
} from "../helper/StaticData";

const TaxForm = ({ states }) => {
    // Main States
    const [name, setName] = useState('');
    const [stateName, setStatename] = useState('');
    const [at, setAt] = useState('');

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
    }

    return (
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex flex-row items-center">
                <InputField label="Name" value={name} setFunction={setName} />
                <DataList label="State" options={states} value={stateName} setFunction={setStatename} />
                <SelectField label="Administrative Type" options={AdministrativeType} value={at} setFunction={setAt} />
            </div>

            {at === 'Municipality' && (
                <div className="flex flex-row items-center">
                    <SelectField label="Property" options={MunicipalityProperty} value={property} setFunction={setProperty} />
                    <TextAreaInput label="Location" value={locationMunicipality} setFunction={setLocationMunicipality} />
                    <SelectField label="Taxes" options={MunicipalityTaxes} value={municipalityTaxes} setFunction={setMunicipalTaxes} />
                </div>
            )}

            {at === 'Panchayat' && (
                <div className="flex flex-row items-center">
                    <SelectField label="Land" options={PanchayatLand} value={land} setFunction={setLand} />
                    <TextAreaInput label="Location" value={locationPanchayat} setFunction={setLocationPanchayat} />
                    <SelectField label="Taxes" options={PanchayatTaxes} value={panchayatTaxes} setFunction={setPanchayatTaxes} />
                </div>
            )}
            <div className="flex flex-row items-center">
                
            </div>
        </form>
    )
}

TaxForm.propTypes = {
    states: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TaxForm;
