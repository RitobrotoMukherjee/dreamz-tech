import React from 'react';
import { Route, Routes} from 'react-router-dom';
import NotFound from './components/pages/not-found/NotFound';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<NotFound />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
