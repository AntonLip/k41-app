import * as axios from "axios"


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "https://localhost:44351/api/"
    }
);

/*
export const getUsers = () => {
    return instance.get()
        .then(response => {
            return response.data;
        });
}

*/

export const getUsersAPI = () =>{
    return instance.get("Lecturals/Min").then(responce =>{
         return responce.data
    });
}
export const getUserbyIdAPI = (id) =>{
    return instance.get("Lecturals/" + id).then(responce =>{
         return responce.data
    });
}