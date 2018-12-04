import axios from 'axios';
import Settings from './Settings';

axios.defaults.headers.post.crossDomain = true;
axios.defaults.mode = 'no-cors';
axios.defaults.baseURL = Settings.address;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default {
    getAirportBord(from = 'c146', to = 'c213') {
        const params = {
            from,
            to,
        };
        return axios.get(`${Settings.address}/?apikey=${Settings.api_key}`, {
            params,
        });
    },
};
