import * as axios from "axios"


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "http://k41.kafedra41.local:90/WB/api/Cadets"
    }
);
export const getCadetsAPI = () =>{   
    return instance.get().then(responce =>{
         return responce.data
    });
}
