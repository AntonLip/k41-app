import * as axios from "axios"
import { GetUser, GetTokens } from "./authAPI";


const instance = axios.create(
    {
        //withCredentials :true,
        headers: { 
            'Content-Type': 'application/json'
          },
        baseURL: "https://localhost:44351/api/"
    }
);

export const getUsersAPI = () => {
    return GetTokens().then(
        (user) => {
            if (user) {
               console.log(user)
                var config = {
                    method: 'get',
                    url: 'https://localhost:44351/api/Lecturals/Min',
                    headers:
                     { 
                        Authorization: 'Bearer ' + user.access_token,
                        Profile : 
                        [
                            user.profile.name,
                            user.profile.email,
                        ]
                     },
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
export const createUserAPI = (newUser) => {
    return instance.post("Lecturals/?", JSON.stringify(newUser)).then(responce => {
        if(responce.data!=null)
        window.location ="/Users"
    });
}

export const getAcademicDegreesAPI = () => {
    return instance.get("AcademicDegrees/").then(responce => {
        return responce.data
    });
}
export const getAcademicTitlesAPI = () => {
    return instance.get("AcademicTitles/").then(responce => {
        return responce.data
    });
}
export const getPositionAPI = () => {
    return instance.get("Positions/").then(responce => {
        return responce.data
    });
}
export const getMilitaryRanksAPI = () => {
    return instance.get("MilitaryRanks/").then(responce => {
        return responce.data
    });
}