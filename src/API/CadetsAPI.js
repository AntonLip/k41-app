import * as axios from "axios"
import { basePAth } from "./api";


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: basePAth
    }
);
export const getCadetsAPI = () => {
    let path = "/Cadet"
    return instance.get(path).then(responce => {        
        return responce.data
    });
}
export const getCadetsByIdAPI = (id) => {
    let path = "/Cadets/" + id
    return instance.get(path).then(responce => {
        return responce.data
    });
}
export const getFilteredCadetsAPI = (values) => {
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };
    var values =
    {
        "MilitaryRank": values.militaryRank === undefined ? null : values.militaryRank,
        "Position": values.position === undefined ? null : values.position,
        "Unit": values.unit === undefined ? null : values.unit

    }

    let path = "/Cadet/filtered/"


    var s = JSON.stringify(values)
    return instance.post(path, s, config).then(responce => {
        debugger
        return responce.data
    }).catch((error) => {
        debugger
        console.log("Api createOficerAPI error");
    });
}
export const deleteCadetsAPI = (id) => {
    let path = "/Cadet/" + id;
    return instance.delete(path).then(responce => {
        return responce.data
    });
}
export const createCadetAPI = (values) => {
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

