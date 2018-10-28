import {API_ROOT} from 'config/config.jsx';
import axios from 'axios';

export default class MatchService {
    match(player1,player2,win) {
        return axios({
            url:`${API_ROOT}/matches`,
            method:'POST',
            data:{
                player1,player2,win
            }
        });
    }
}