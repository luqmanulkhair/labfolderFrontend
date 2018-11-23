import axios from 'axios';
export default class ApiService {
     search(url,data){
        let request = {
            method: 'post',
            url,
            data
        }
         return axios(request);
        }


}

