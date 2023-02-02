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
            <StyledLink to="events">Events</StyledLink>
            </li>
        </ul>
       </nav>
           
       </header>
    );
}