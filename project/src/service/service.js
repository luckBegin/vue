import axios from 'axios';

const GLOBAL = 'https://kmgoapi.yoopoon.com/api/home/' ;

const getAccess = function(){
    return axios.get(GLOBAL + '/getToken', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
};

const sign = function(data){
    return axios.post(GLOBAL + "instUserinfo" , data)
};

const postCode = function(data){
	return axios.get(GLOBAL + "GetWdaOpenidbycode?code=" + data)
};
const postYaoYiYaoCode = function(data){
    return axios.get(GLOBAL + "GetWdaYaoyiyaoOpenidBycode?code=" + data)
};
const getAlbum = function(){
    return axios.get('http://jichang.yoopoon.com/api/imageUpload')
}
export const service = {
    sign : sign ,
    postCode : postCode ,
    getAlbum : getAlbum,
    postYaoYiYaoCode : postYaoYiYaoCode
};