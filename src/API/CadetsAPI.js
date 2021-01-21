import * as axios from "axios"
import { basePAth } from "./api";


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: basePAth 
        }
);
export const getCadetsAPI = () =>{   
    let path = "/Cadets"
    return instance.get(path).then(responce =>{
         return responce.data
    });
}
export const getCadetsByIdAPI = (id) =>{   
    let path = "/Cadets/" + id 
    return instance.get(path).then(responce =>{
         return responce.data
    });
}
export const getFilteredCadetsAPI = (values) =>{   
    debugger
    let path = "/Cadets/FilteredCadet?militaryRank=" + values.militaryRank +
                "&Position=" + values.position + 
                "&groupNumber=" + values.GroupNumber;
    return instance.get(path).then(responce =>{
         return responce.data
    });
}
export const deleteCadetsAPI = (id) =>{  
    let path = "/Cadets/" + id; 
    return instance.delete(path).then(responce =>{
         return responce.data
    });
}
export const createCadetAPI = (values) =>{          
    let path = "/Cadets/?"
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };
    return instance.post(path, JSON.stringify(values), config).then(responce => {
        if (responce.data != null)
            window.location = "/Cadets"
    }).catch((error) => {
        console.log("Api createOficerAPI error");
        
    });
}

  