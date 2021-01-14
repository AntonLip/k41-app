import * as axios from "axios"
import { basePAth } from "./api";


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: basePAth + "/DisciplineDBs"
    }
);

export const getDisciplineByIdAPI = (id) => {
    var path = "/" + id
    return instance.get(path).then(responce => {
        return responce.data
    });
}

export const getDisciplineNamesAPI = () => {
    var path = "/Names"
    return instance.get(path).then(responce => {
        return responce.data
    });
}
export const createDisciplineNamesAPI = (values) => {
    debugger
    const formData = new FormData();
    formData.append('body', values.Plan[File]);
    delete values.Plan;
    let url = 'http://k41.kafedra41.local/WB/api/DisciplineDBs/?';
    var dataTo = JSON.stringify(values);
    var config = {
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: dataTo
    };
    
    return instance.post(url, formData, config).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("create disciplines error");
        alert(error.message);
    });
    
}
export const uploadFilePlan = (id, file, type) => {
    let url = 'https://localhost:44351/api/DisciplineDBs?id=' + id + '&type=' + type;
    const formData = new FormData();
    formData.append('body', file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
    };
    return instance.post(url, formData, config).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("upload files error");
        alert(error.message);
    });
}
