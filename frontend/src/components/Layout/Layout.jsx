import { Outlet } from 'react-router-dom';
import Nav from './nav';

const mainLayout = () => (
  <>
    <Nav />
    <main className="MainBody">
      <Outlet />
    </main>
  </>

);

export default mainLayout;
