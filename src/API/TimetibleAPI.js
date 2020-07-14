import * as axios from "axios"


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "https://localhost:44351/api/LessonDTOes/"
    }
);
export const getTimetableAPI = () =>{
    return instance.get().then(responce =>{
         return responce.data
    });
}
