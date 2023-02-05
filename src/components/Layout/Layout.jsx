import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';
import { HeaderLink } from './Layout.styled';

export const Layout = () => {
  return (
    <header>
      <nav>
        <ul>
          <HeaderLink>
            <StyledLink to="/">Home</StyledLink>
          </HeaderLink>
          <HeaderLink>
            <StyledLink to="movies">Movies</StyledLink>
          </HeaderLink>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};
