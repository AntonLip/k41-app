import * as axios from "axios"
const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: "https://localhost:44383/api/VideoCourses"
    }
);
export const getVideoCoursesNamesAPI = () => {    
    
    return instance.get().then(responce => {
        return responce.data
    }).catch((error)=>{
        console.log("Api VideoCourses call error");
        alert(error.message);
     });
}
export const getVideoCourseAPI = (id) => {    
    const path = "/" + id
    return instance.get(path).then(responce => {
        return responce.data
    }).catch((error)=>{
        console.log("Api VideoCourses call error");
        alert(error.message);
     });
}