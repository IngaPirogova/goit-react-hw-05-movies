import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeList = styled.ul`
  list-style: none;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: tomato;
  }
`;
