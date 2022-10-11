import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatesList } from '../../redux/states/states';
import Loading from '../../components/Loading';
import Button from '../../components/inputs/Button';

const TaxForm = React.lazy(() => import('../../components/Form'));

const Home = () => {
    const dispatch = useDispatch();
    const { loading, stateList } = useSelector((state) => state.states);

    useEffect(() => {
        if (stateList.length === 0) {
            dispatch(fetchStatesList());
        }
    }, [dispatch]);

    const SyncWithDB = () => {
        console.log('Sync');
    }

    return (
        <Suspense fallback={<Loading />}>
            <div id="Home-holder">
                <section id="Form" className="FormHolder">
                    {loading && (<Loading />)}
                    {(!loading && stateList.length > 0) && (
                        <>
                            <div className="flex flex-col w-full">
                                <Button
                                    type='button' className='ButtonRight'
                                    handleClick={SyncWithDB} label='Sync With DB'
                                />
                            </div>
                            <TaxForm />
                        </>

                    )}
                </section>
            </div>
        </Suspense>
    );
}

export default Home;
