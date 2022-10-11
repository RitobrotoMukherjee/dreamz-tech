import React from "react";
import PropTypes from 'prop-types';
import InputField from "../inputs/Input";
import DataList from "../inputs/DataList";
import { useSelector } from "react-redux";
import { AdministrativeType } from '../../helper/StaticData';

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
                    name='stateList' label="State" options={stateList}
                    value={data.stateName} handleChange={handleChange}
                />

                <SelectField
                    name="administrativeType" label="Administrative Type"
                    options={AdministrativeType} value={data.at} handleChange={handleChange}
                />
            </div>
        </>
    )
}

MainForm.propTypes = {
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default MainForm;
