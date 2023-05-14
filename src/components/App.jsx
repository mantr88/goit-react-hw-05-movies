import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

//1. Після наповнення компоненту Cast та Reviews перестала працювати кнопка 'Back to list';
// 2. Додати propTypes;
// 3. Додати стилі;

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
