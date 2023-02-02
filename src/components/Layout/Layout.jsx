import { StyledLink } from "./Layout.styled"
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
       <header>
       <nav>
        <ul>
            <li>
                <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
            <StyledLink to="events">Movies</StyledLink>
            </li>
        </ul>
       </nav>
       <Outlet />           
       </header>
    );
}