import * as axios from "axios"
export const basePAth = "https://localhost:44351/api"
//export const basePAth = "http://k41.kafedra41.local/WB/api"
const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: basePAth
    }
);

export const saveFile = (file, path) =>{
    const formData = new FormData();
    formData.append('body', file);    
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }
    let myPath = "https://localhost:44383/Vieo/Image"
    return instance.post(myPath, formData, config).then(responce => {
      console.log("upload files success");
      return responce.data
    }).catch((error) => {
      debugger
      console.log("upload files error");
      alert(error.message);
    });
}


export const getofficersAPI = (token) => {
    let path = "Lecturals/Min";
    debugger
    return instance.get(path).then(responce => {
        debugger
        return responce.data
    }).catch((error) => {
        console.log("Api  Lecturals/Min error");
        alert(error.message);
    });;
}   

export const getUserbyIdAPI = (id) => {
    let path = "Lecturals/" + id;
    debugger
    return instance.get(path).then(responce => {
        debugger
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
    });;
}

export const updateUserAPI = (data) => {

}

export const createOficerAPI = (person) => {  
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };
    return instance.post("Lecturals/?", JSON.stringify(person), config).then(responce => {
        if (responce.data != null)
            window.location = "/Users"
    }).catch((error) => {
        console.log("Api createOficerAPI error");
        
    });
}

export const getAcademicDegreesAPI = () => {
    return instance.get("AcademicDegrees/").then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
    });;
}

export const getAcademicTitlesAPI = () => {
    return instance.get("AcademicTitles/").then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
    });;
}
export const getPositionAPI = (f) => {
    debugger
    return instance.get("Positions/").then(responce => {
        f()
        return responce.data
    });
}
export const getMilitaryRanksAPI = () => {
    return instance.get("MilitaryRanks/").then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
    });;
}
export const getUserDataByFilter = (values) => {
    debugger;
    var path = "/Lecturals/filtered?militaryRank=" + values.militaryRank + "&position=" + values.position
        + "&academicTitle=" + values.academicTitle + "&academicDegree=" + values.academicDegree + "&formSec=" + values.formSec
        + "&unit=" + values.unit;
    return instance.get(path).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
    });;
}
export const deleteUserAPI = (id) => {

    var path = "Lecturals/" + id;
    return instance.delete(path).then(responce => {

        return responce.data
    }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
    });
}

export const getUnitAPI = () => {
    var path = "Units/"
    return instance.get(path).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api Units call error");
        alert(error.message);
    });
}

export const getLecturalsNameAPI= () => {
    var path = "Lecturals/Names"
    return instance.get(path).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api Units call error");
        alert(error.message);
    });
}

export const getGroupsAPI= () => {
    var path = "/GroupDBs/Numbers"
    return instance.get(path).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api Units call error");
        alert(error.message);
    });
}

export const getSpecAPI = () => {    
    return instance.get("/SpecializationDBs").then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error SpecializationDBs");
        alert(error.message);
    });;
}