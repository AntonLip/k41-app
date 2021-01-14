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
export const createDisciplineNamesAPI = (values) => {
    debugger
    var dataTo = JSON.stringify(values);
    var config = {
        method: 'post',
        url: 'http://k41.kafedra41.local/WB/api/DisciplineDBs/?',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : dataTo
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
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
