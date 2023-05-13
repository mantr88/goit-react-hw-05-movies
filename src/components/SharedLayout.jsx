import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
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
