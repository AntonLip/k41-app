import * as axios from "axios"
import { GetUser, GetTokens } from "./authAPI";


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

export const getUsersAPI = () => {
    return GetTokens().then(
        (user) => {
            if (user) {
                debugger;
                var config = {
                    method: 'get',
                    url: 'https://localhost:44351/api/Lecturals/Min',
                    headers: { Authorization: 'Bearer ' + user.access_token  },
                    };

                return axios(config)
                    .then(responce => {
                        return responce.data
                    })
            }
        })
}

export const getUserbyIdAPI = (id) => {
    return instance.get("Lecturals/" + id).then(responce => {
        return responce.data
    });
}