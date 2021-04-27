import * as axios from "axios"
import { basePAth, saveFile } from "./api";


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "https://localhost:44351/api"
    }
);

export const getDisciplineByIdAPI = (id) => {
    var path = "/DisciplineDBs/" + id
    return instance.get(path).then(responce => {
        return responce.data
    });
}

export const getDisciplineNamesAPI = () => {
    var path = "/DisciplineDBs/Names"
    debugger
    return instance.get(path).then(responce => {
        debugger
        return responce.data
    });
}

export const getFilteredDisciplineNamesAPI = (specName, year) => {
    var path = "/DisciplineDBs/filter?" + "specName=" + specName + "&year=" + year;
    return instance.get().then(responce => {
        return responce.data
    });
}

export const createDisciplineNamesAPI = (values) => {
    debugger
    let dataTO = {
        name : values.name,
        fullName : values.fullName,
        countHours : Number(values.countHours) ,        
        countHoursGZ :  Number(values.countHoursGZ),        
        countHoursPZ :  Number(values.countHoursPZ),        
        countHoursLeck :  Number(values.countHoursLeck),        
        countHoursSEM :  Number(values.countHoursSEM),        
        countHoursLR :  Number(values.countHoursLR),        
        countHoursMZ :  Number(values.countHoursMZ),        
        countHoursTest : Number(values.countHoursTest),        
        countHoursСontrolWork :  Number(values.countHoursСontrolWork),       
        countHoursSWZ :  Number(values.countHoursSWZ),       
        isExam : values.isExam,
        dateOfPlan : values.dateOfPlan + "T00:00:00.000",
        countNorm :  Number(values.countNorm),
        Semester :  Number(values.Semester),
        SpecializationDB : values.SpecializationDB
    } 

    let file = values.lan;   
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };
    var s = JSON.stringify(dataTO);
    return instance.post('/DisciplineDBs/?', s, config).then((responce,file) => {
        debugger
        if (responce.data != null)
        {
            uploadFilePlan(responce.data.id, file, "Plan");
        }
            window.location = "/lessons"
    }).catch((error) => {
        console.log("Api lessons error");
        
    });
    
}

export const uploadFilePlan = (id, file, type) => {
    let url = '/DisciplineDBs?id=' + id + '&type=' + type;
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
    });
}

export const getAllLessonsinDisciplines = (id) => {
    debugger
    var path = "/DisciplineDBs/" + id + "/lessons"
    return instance.get(path).then(responce => {        
        return responce.data
    });
}

export const createLessonInDisciplineAPI = (values) => {
    debugger
    var path = "/LessonDTOes/"
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };
    var s = JSON.stringify(values);
    return instance.post(path, s, config).then(responce => {
        debugger
        return responce.data
    });
}