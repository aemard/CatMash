import { API_ROOT } from 'config/config.jsx';
import axios from 'axios';
import {shuffle} from 'helpers/shuffle.jsx';


export default class CatService {
    getCats() {
        return axios.get(`${API_ROOT}/cats`);
    }

    getTwoRandomCats() {
        return axios.get(`${API_ROOT}/cats`).then(res => {
            return Promise.resolve(shuffle(res.data).slice(0,2));
        });
    }

    getCatsByRanking() {
        return axios({
            method:'GET',
            url: `${API_ROOT}/cats`,
            params: {
                filter: { order: "rating DESC" }
            }
        });
    }

    getTopRankedCats(){
        return axios({
            method:'GET',
            url: `${API_ROOT}/cats`,
            params: {
                filter: { order: "rating DESC", limit:5}
            }
        });
    }

    getOtherRankedCats(){
        return axios({
            method:'GET',
            url: `${API_ROOT}/cats`,
            params: {
                filter: { order: "rating DESC",offset: 5}
            }
        });
    }

}