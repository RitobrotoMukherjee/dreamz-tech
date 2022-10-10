import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { fetchStatesList } from '../../redux/states/states';
import TaxForm from '../../components/Form';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, stateList } = useSelector((state) => state.states);

    useEffect(() => {
        if (stateList.length === 0) {
            dispatch(fetchStatesList());
        }
    }, [dispatch]);

    return (
        <div id="Home-holder">
            <div id="Form" className="FormHolder">
                {loading && (<Loading />)}
                {(!loading && stateList.length > 0) && (
                    <TaxForm states={stateList} />
                )}
                
            </div>
        </div>
    );
}

export default Home;
