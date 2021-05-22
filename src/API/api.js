import * as axios from "axios"
export const basePAth = "http://192.168.5.251:8080/api"
//export const basePAth = "http://k41.kafedra41.local/WB/api"
const instance = axios.create(
    {
        baseURL: basePAth
    }
);




export const updateUserAPI = (data) => {

}

export const createOficerAPI = (person) => {
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };
    return instance.post("/Oficer", JSON.stringify(person), config).then(responce => {
        if (responce.data != null)
            window.location = "/Users"
    }).catch((error) => {
        console.log("Api createOficerAPI error");
    });
}





//+++++++++++++++++++++++++++++++++++++++++++++++

export const getUserbyIdAPI = (id) => {
    let path = "/Oficer/" + id;
    return instance.get(path).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
    });;
}
export const getofficersAPI = (token) => {
    let path = "/Oficer";

    return instance.get(path).then(responce => {

        return responce.data.value
    }).catch((error) => {
        console.log("Api  Lecturals/Min error");
    });;
}
export const getGroupsAPI = () => {

    var path = "/Unit/cadets"
    return instance.get(path).then(responce => {
        return responce.data.value
    }).catch((error) => {
        console.log("Api Units call error");
    });
}
export const getUnitAPI = () => {
    var path = "Unit/oficers"
    return instance.get(path).then(responce => {
        return responce.data.value
    }).catch((error) => {
        console.log("Api Units call error");
    });
}
export const getLecturalsNameAPI = () => {
    var path = "/Oficer/lecturals"
    return instance.get(path).then(responce => {
        return responce.data.value
    }).catch((error) => {
        console.log("Api Units call error");
    });
}
export const getPositionAPI = (IsOfficers) => {
    let path = "";
    IsOfficers ? path = "/Position/oficers" : path = "/Position/cadets"
    return instance.get(path).then(responce => {
        
        return responce.data.value
    });
}
export const getMilitaryRanksAPI = (IsOfficers) => {
    let path = "";
    IsOfficers ? path = "/MilitaryRank/oficers" : path = "/MilitaryRank/cadets"
    return instance.get(path).then(responce => {
        return responce.data.value
    }).catch((error) => {
        console.log("Api call error");
    });;
}
export const getUserDataByFilter = (values) => {
    const config = {
            headers: {
                'content-type': 'application/json',
            },
        };
        debugger;
    var values =
    {
        "MilitaryRank": values.militaryRank === undefined ? null : values.militaryRank,
        "Position": values.position === undefined ? null : values.position,
        "Unit": values.unit === undefined ? null : values.unit

    }
    
    let path = "/Oficer/filtered/"
    

    var s = JSON.stringify(values)
    return instance.post(path, s, config).then(responce => {
        debugger
        return responce.data.value
    }).catch((error) => {
        debugger
        console.log("Api createOficerAPI error");
    });
}
//+++++++++++++++++++++++++++++++++++++++++++++++
























export const deleteUserAPI = (id) => {

    var path = "Lecturals/" + id;
    return instance.delete(path).then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
    });
}
























export const getAcademicDegreesAPI = () => {
    return instance.get("AcademicDegrees/").then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
    });;
}

export const getAcademicTitlesAPI = () => {
    return instance.get("AcademicTitles/").then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error");
    });;
}
export const getSpecAPI = () => {
    return instance.get("/SpecializationDBs").then(responce => {
        return responce.data
    }).catch((error) => {
        console.log("Api call error SpecializationDBs");
    });;
}

