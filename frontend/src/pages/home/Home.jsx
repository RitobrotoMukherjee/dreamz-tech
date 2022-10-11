import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatesList } from '../../redux/states/states';
import Loading from '../../components/Loading';

const HomeMainSection = React.lazy(() => import('../../components/HomeMainSection'));

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
                {loading && (<Loading />)}

                {(!loading && stateList.length > 0) && (
                    <HomeMainSection />
                )}
            </div>
        </Suspense >
    );
}

export default Home;
