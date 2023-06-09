import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const SharedLayout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
