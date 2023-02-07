import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;

  &.active {
    color: tomato;
    font-weight: 600;
  }
`;

export const HeaderLink = styled.li`
  list-style: none;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 50px;
`;
