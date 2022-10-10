import React, { Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import Loading from './components/Loading';

/**
 * Load component view with promise and fallback,
 * Site load speed increases
 * Only loads the components that is getting rendered
 * Does not load everything in the beginning
 */
const Layout = React.lazy(() => import( './components/Layout/Layout' ));
const Home = React.lazy(() => import( './pages/home/Home' ));
const NotFound = React.lazy(() => import( './pages/not-found/NotFound' ));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
