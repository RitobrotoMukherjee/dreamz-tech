import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const mainLayout = () => (
  <>
    <Nav />
    <main className="MainBody">
      <Outlet />
    </main>
  </>

);

export default mainLayout;
