import { useEffect, useState } from "react";
import  fetchEvents from "services/api";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents().then(setEvents);
    }, []);
    console.log(events);

    return (
<ul>
    {/* {events.map(event => (
        <li></li> */}
    {/* ) )}     */}
    
</ul>
    )
}