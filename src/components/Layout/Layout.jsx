import { Outlet } from "react-router-dom"
import { StyledLink } from "./Layout.styled"

export const Layout = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <StyledLink to="/">Home</StyledLink> 
                    </li>
                    <li>
                    <StyledLink to="movies">Movies</StyledLink> 
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    );
}