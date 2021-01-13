import * as axios from "axios"
const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: "http://k41.kafedra41.local/Video/api/VideoCourses"
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