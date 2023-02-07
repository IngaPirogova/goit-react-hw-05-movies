import { Outlet } from 'react-router-dom';
import { StyledLink, HeaderLink, HeaderList } from './Layout.styled';



export const Layout = () => {
  return (
    <header>
      <nav>
        <HeaderList>
          <HeaderLink>
            <StyledLink to="/">Home</StyledLink>
          </HeaderLink>
          <HeaderLink>
            <StyledLink to="movies">Movies</StyledLink>
          </HeaderLink>
        </HeaderList>
      </nav>
      <Outlet />
    </header>
  );
};
