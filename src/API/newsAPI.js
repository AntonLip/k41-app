import * as axios from "axios"
const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: "http://192.168.7.2:1998/api/news/"
    }
);


export const getNewsAPI = (page, count, sort) => {    
    
    const path = "?KeyApi=77411ed966176c9dc37d5b3b82097018&Page="+page
                +"&Count="+count 
                + (sort.From ? "&From=" + sort.From : "")
                + (sort.To ?  "&To=" + sort.To : "")
                + (sort.DateFrom ? "&DateFrom=" + sort.DateFrom : "")
                + (sort.DateTo ? "&DateTo=" + sort.DateTo : "")
                           
    return instance.get(path).then(responce => {
        
        return responce.data
    }).catch((error)=>{
        console.log("Api news call error");
     });
}
export const getSingleNewsAPI = (id) => {    
    
    return instance.get(id+"/?KeyApi=77411ed966176c9dc37d5b3b82097018").then(responce => {
        debugger
        return responce.data
    }).catch((error)=>{
        console.log("Api news call error");
     });
}

export const postNewsAPI = (data) => {    
    
    return instance.post("?KeyApi=77411ed966176c9dc37d5b3b82097018", data).then(responce => {
        debugger
        return responce.status
    }).catch((error)=>{
        console.log("Api news call error");
     });
}

export const deleteSingleNewsAPI = (id, isDelete="False") => {    
    return instance.delete(id+"/?KeyApi=77411ed966176c9dc37d5b3b82097018" + "&isDelete=" + isDelete).then(responce => {
        debugger
        return responce.status
    }).catch((error)=>{
        console.log("Api news call error");
     });
}
export const putSingleNewsAPI = (id, data) => {    
    return instance.put(id+"/?KeyApi=77411ed966176c9dc37d5b3b82097018", data).then(responce => {
        debugger
        return responce.status
    }).catch((error)=>{
        console.log("Api news call error");
     });
}