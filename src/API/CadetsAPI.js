import * as axios from "axios"
import { basePAth } from "./api";


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: basePAth + "/Cadets"
    }
);
export const getCadetsAPI = () =>{   
    return instance.get().then(responce =>{
         return responce.data
    });
}
export const getFilteredCadetsAPI = (values) =>{   
    debugger
    let path = "/FilteredCadet?militaryRank=" + values.militaryRank +
                "&Position=" + values.position + 
                "&groupNumber=" + values.GroupNumber;
    return instance.get(path).then(responce =>{
         return responce.data
    });
}
export const deleteCadetsAPI = (id) =>{  
    let path = "/" + id; 
    return instance.delete(path).then(responce =>{
         return responce.data
    });
}

export const  createCadetAPI = (person) =>{
    return instance.post("/?", JSON.stringify(person)).then(responce => {
        if (responce.data != null)
            window.location = "/Users"
    }).catch((error) => {
        console.log("Api createOficerAPI error");
        
    });
}