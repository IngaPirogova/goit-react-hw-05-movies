import { useFetchMovie } from "hooks/useFetchMovie"

export const MovieDetails = () => {
const movie = useFetchMovie();
console.log(movie);

    return <div>Details</div>
    
    
}