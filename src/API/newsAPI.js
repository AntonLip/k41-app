import * as axios from "axios"
const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: "http://192.168.5.11/api/news/?KeyApi=77411ed966176c9dc37d5b3b82097018"
    }
);


export const getNewsAPI = () => {    
    debugger
    return instance.get().then(responce => {
        debugger
        return responce.data
    }).catch((error)=>{
        console.log("Api news call error");
        alert(error.message);
     });;
}