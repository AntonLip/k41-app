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
    debugger
    const path = "?KeyApi=77411ed966176c9dc37d5b3b82097018&Page="+page
                +"&Count="+count 
                + (sort.From ? "&From=" + sort.From : "")
                + (sort.To ?  "&To=" + sort.To : "")
                + (sort.DateFrom ? "&DateFrom=" + sort.DateFrom : "")
                + (sort.DateTo ? "&DateTo=" + sort.DateTo : "")
                debugger            
    return instance.get(path).then(responce => {
        debugger
        return responce.data
    }).catch((error)=>{
        console.log("Api news call error");
        alert(error.message);
     });
}
export const getSingleNewsAPI = (id) => {    
    
    return instance.get(id + "/?KeyApi=77411ed966176c9dc37d5b3b82097018").then(responce => {
        debugger
        return responce.data
    }).catch((error)=>{
        console.log("Api news call error");
        alert(error.message);
     });
}
