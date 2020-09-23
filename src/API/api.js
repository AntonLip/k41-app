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
                        Profile:
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

export const updateUserAPI = (data) => {
    
}
export const createUserAPI = (newUser) => {
    debugger;
    return instance.post("Lecturals/?", JSON.stringify(newUser)).then(responce => {
        if (responce.data != null)
            window.location = "/Users"
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
export const getUserDataByFilter = (filters) => {
    debugger;
    var path = "/Lecturals/filtered?firstName=" + filters.firstName + "&middleName=" + filters.middleName +
        "&lastName=" + filters.lastName + "&militaryRank=" + filters.militaryRank + "&position=" + filters.position
        + "&academicTitle=" + filters.academicTitle + "&academicDegree=" + filters.academicDegree + "&formSec=" + filters.formSec;
    return instance.get(path).then(responce => {
        return responce.data
    });
}
export const deleteUserAPI = (id) =>{
    
    var path = "Lecturals/" + id;
    return instance.delete(path).then(responce => {
        
        return responce.data
    });
}