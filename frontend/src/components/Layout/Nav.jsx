import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <header>
    <nav>
        <NavLink to="/">
            <h3>DreamzTech</h3>
        </NavLink>
    </nav>
  </header>
);

export default Nav;
