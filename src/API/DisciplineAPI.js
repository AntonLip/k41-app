import * as axios from "axios"


const instance = axios.create(
    {
        baseURL: "http://192.168.5.250/api/"
    }
);

export const getDisciplineByIdAPI = (id) => {
    debugger
    var path = "Disciplines/" + id
    return instance.get(path).then(responce => {
        return responce.data
    });
}
export const deleteDisciplines = (id) => {
    var path = "Disciplines/" + id
    return instance.delete(path).then(responce => {
        return responce.data
    });
}
export const getDisciplineNamesAPI = (page, count) => {
    if(page === undefined )
        {page = 0}
    if(count === undefined)
        {count = 9}
    var path = "Disciplines?"  + "count=" + count + "&page=" + page;
    return instance.get(path).then(responce => {
        console.log(responce.data.value);        
        return responce.data.value
    });
}

export const GetCountDisciplines = () => {
    var path = "Disciplines/Count"
    debugger
    return instance.get(path).then(responce => {
        debugger
        console.log(responce.data.value);        
        return responce.data.value
    });
}

export const getFilteredDisciplineNamesAPI = (specName, year) => {
    var path = "/DisciplineDBs/filter?" + "specName=" + specName + "&year=" + year;
    return instance.get().then(responce => {
        console.log(responce.data.value);       

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
    return instance.post('/Disciplines/?', s, config).then((responce,file) => {
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
    var path = "Lessons/discipline/" + id
    return instance.get(path).then(responce => {        
        return responce.data.value
    });
}

export const createLessonInDisciplineAPI = (values) => {
    debugger
    var path = "Lessons"
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

export const getLessonTypeAPI = () => {
    return instance.get("LessonType").then(responce => {
        return responce.data.value
    }).catch((error) => {
        console.log("Api call error LessonType");
    });;
}

export const deleteLessonAPI = (id) => {
    let path = "Lessons/" + id 
    return instance.delete(path).then(responce => {
        return responce.data.value
    }).catch((error) => {
        console.log("Api call error LessonType");
    });;
}

export const getTest = (disciplineId) =>{
    let path = "Questions/Test/" + disciplineId + "?countQuestions=25"
    return instance.get(path).then(responce => {
        return responce.data.value
    }).catch((error) => {
        console.log(error);
    });
}
export const checkTest = (test) =>{
    let path = "Questions/CheckTest" 
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };
    var s = JSON.stringify(test);
    return instance.post(path, s, config).then(responce => {        
        return responce.data
    }).catch((error) => {
        console.log(error);
    });
}