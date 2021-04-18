import * as axios from "axios"
const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json',
            
        },
        baseURL: "http://192.168.4.3"
       }
);

export const getWindowsStatusAPI = () => {  
    return instance.get().then(responce => {
        return responce.data
    }).catch((error)=>{
        console.log("Api windows status call error");
     });
}//{crossDomain:true}