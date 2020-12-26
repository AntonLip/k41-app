import * as axios from "axios"

const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: "https://localhost:44351/api/"
    }
);

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

export const createUserAPI = (newUser) => {  
    return instance.post("Lecturals/?", JSON.stringify(newUser)).then(responce => {
        if (responce.data != null)
            window.location = "/Users"
    }).catch((error) => {
        console.log("Api call error");
        alert(error.message);
    });;
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
export const getPositionAPI = () => {
    return instance.get("Positions/").then(responce => {
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
export const getUserDataByFilter = (filters) => {
    debugger;
    var path = "/Lecturals/filtered?firstName=" + filters.firstName + "&middleName=" + filters.middleName +
        "&lastName=" + filters.lastName + "&militaryRank=" + filters.militaryRank + "&position=" + filters.position
        + "&academicTitle=" + filters.academicTitle + "&academicDegree=" + filters.academicDegree + "&formSec=" + filters.formSec;
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