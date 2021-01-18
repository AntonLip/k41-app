import * as axios from "axios"
let path = "https://localhost:44383/api/VideoCourses"

//let path = "http://k41.kafedra41.local/Video/api/VideoCourses"
const instance = axios.create(
    {
        //withCredentials :true,
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL: path
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