import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { fetchStatesList } from '../../redux/states/states';


const TaxForm = React.lazy(() => import('../../components/Form'));

const Home = () => {
    const dispatch = useDispatch();
    const { loading, stateList } = useSelector((state) => state.states);

    useEffect(() => {
        if (stateList.length === 0) {
            dispatch(fetchStatesList());
        }
    }, [dispatch]);

    return (
        <Suspense fallback={<Loading />}>
            <div id="Home-holder">
                <div id="Form" className="FormHolder">
                    {loading && (<Loading />)}
                    {(!loading && stateList.length > 0) && (
                        <TaxForm states={stateList} />
                    )}
                </div>
            </div>
        </Suspense>
    );
}

export default Home;
