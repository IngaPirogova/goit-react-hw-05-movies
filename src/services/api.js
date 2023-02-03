import axios from "axios";

 const API_KEY = 'tIj1kC332ExvV8vs1uBAp1fasaO5ERpG';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export default async function fetchEvents() {
    const res = await axios('events', { params: { apikey: API_KEY}});
    return res.data._embedded.events;
}