import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    color: blue;
    text-decoration: none;

&.active {
  color: orange;
}
`;



