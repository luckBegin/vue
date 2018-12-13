import axios from 'axios';

const GLOBAL = '' ; 

const getAccess = function(){
    return axios.get(GLOBAL + '/getToken', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
};

const sign = function(data){
    return axios.post(GLOBAL + "instUserinfo" , data)
};

export const service = {
    sign : sign 
};