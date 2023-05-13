import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </div>
  );
};
