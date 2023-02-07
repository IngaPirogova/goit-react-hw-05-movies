import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchInput = styled.input`
  margin-left: 20px;
  margin-right: 10px;
  outline: none;
  border-radius: 4px;
  border: 1px solid grey;
  height: 20px;

  &:focus,
  &:hover {
    border: 1px solid tomato;
    transition: border 250ms linear;
  }
`;
export const SearchList = styled.ul`
  list-style: none;
  text-decoration: none;
`;

export const SearchLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: tomato;
  }
`;
