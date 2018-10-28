import axios from 'axios';

export default class MatchService {
    constructor(props){
        this.API_ROOT = process.env.REACT_APP_API_URL;
    }
    match(player1,player2,win) {
        return axios({
            url:`${this.API_ROOT}/matches`,
            method:'POST',
            data:{
                player1,player2,win
            }
        });
    }
}