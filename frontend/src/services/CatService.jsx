import axios from 'axios';
import {shuffle} from 'helpers/shuffle.jsx';


export default class CatService {
    constructor(props){
        this.API_ROOT = process.env.REACT_APP_API_URL;
        console.log(process.env);
    }
    getCats() {
        return axios.get(`${this.API_ROOT}/cats`);
    }

    getTwoRandomCats() {
        return axios.get(`${this.API_ROOT}/cats`).then(res => {
            return Promise.resolve(shuffle(res.data).slice(0,2));
        });
    }

    getCatsByRanking() {
        return axios({
            method:'GET',
            url: `${this.API_ROOT}/cats`,
            params: {
                filter: { order: "rating DESC" }
            }
        });
    }

    getTopRankedCats(){
        return axios({
            method:'GET',
            url: `${this.API_ROOT}/cats`,
            params: {
                filter: { order: "rating DESC", limit:5}
            }
        });
    }

    getOtherRankedCats(){
        return axios({
            method:'GET',
            url: `${this.API_ROOT}/cats`,
            params: {
                filter: { order: "rating DESC",offset: 5}
            }
        });
    }

}