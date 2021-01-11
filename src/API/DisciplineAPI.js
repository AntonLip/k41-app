import * as axios from "axios"


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "http://k41.kafedra41.local:90/WB/api/DisciplineDBs"
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
