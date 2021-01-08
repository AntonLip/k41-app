import * as axios from "axios"


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "https://localhost:44351/api/Cadets"
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