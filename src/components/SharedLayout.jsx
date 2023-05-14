import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <hr></hr>
      </nav>
      <Outlet />
    </header>
  );
};

export default SharedLayout;
