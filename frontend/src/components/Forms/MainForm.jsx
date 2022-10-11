import React from "react";
import PropTypes from 'prop-types';
import InputField from "../inputs/Input";
import DataList from "../inputs/DataList";
import SelectField from '../inputs/Select';
import TextAreaInput from '../inputs/Textarea';
import { useSelector } from "react-redux";
import { 
    AdministrativeType, MunicipalityProperty, MunicipalityTaxes,
    PanchayatTaxes, PanchayatLand
} from '../../helper/StaticData';

const MainForm = ({ data, handleChange }) => {

    // using statelist from Redux store instead of passing as prop
    const { stateList } = useSelector((state) => state.states);

    return (
        <>
            <div className="flex flex-row items-center">
                <InputField
                    name="name" label="Name"
                    value={data.name} handleChange={handleChange}
                />

                <DataList
                    name='state' label="State" options={stateList}
                    value={data.state} handleChange={handleChange}
                />

                <SelectField
                    name="administrative_type" label="Administrative Type"
                    options={AdministrativeType} value={data.administrative_type} handleChange={handleChange}
                />
            </div>

            {data.administrative_type === 'Municipality' && (
                <div className="flex flex-row items-center">
                    <SelectField
                        name="property" label="Property" options={MunicipalityProperty}
                        value={data.property} handleChange={handleChange}
                    />

                    <TextAreaInput
                        name="locationMunicipality" label="Location"
                        value={data.locationMunicipality} handleChange={handleChange}
                    />

                    <SelectField
                        name="municipalityTaxes" label="Taxes" options={MunicipalityTaxes}
                        value={data.municipalityTaxes} handleChange={handleChange}
                    />
                </div>
            )}

            {data.administrative_type === 'Panchayat' && (
                <div className="flex flex-row items-center">
                    <SelectField
                        name="land" label="Land" options={PanchayatLand} 
                        value={data.land} handleChange={handleChange}
                    />

                    <TextAreaInput
                        name="locationPanchayat" label="Location" 
                        value={data.locationPanchayat} handleChange={handleChange}
                    />

                    <SelectField
                        name="panchayatTaxes" label="Taxes" options={PanchayatTaxes}
                        value={data.panchayatTaxes} handleChange={handleChange}
                    />
                </div>
            )}
        </>
    )
}

MainForm.propTypes = {
    data: PropTypes.objectOf(PropTypes.string).isRequired,
    handleChange: PropTypes.func.isRequired
}

export default MainForm;
