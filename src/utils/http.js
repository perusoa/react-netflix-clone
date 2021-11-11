import axios from 'axios';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const HTTP = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': 'Bearer ' + API_KEY
  }
});

export default HTTP;