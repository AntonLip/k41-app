import * as axios from "axios"


const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "https://localhost:44351/api/TimetableDBs"
    }
);
export const getTimetableAPI = (forWho, dateTime, isCadet)  =>{

//"/forGroup?groupDTO="
//"/forLectural?lectural="
var path;
isCadet === true ?  path = "/forGroup?groupDTO=" + forWho + "&dateTime=" + dateTime : 
                    path = "/forLectural?lectural=" + forWho + "&dateTime=" + dateTime

    return instance.get(path).then(responce =>{
         return responce.data
    });
}
export const getFilteredTimetableAPI = (lectural, discipline, group,  startDate, stopDate) =>{
    let path = "/GetFileteredTimetable?lectural=" + lectural +
               "&discipline=" + discipline +
               "&group=" + group +
               "&startDate=" + startDate +
               "&stopDate=" + stopDate;
    return instance.get(path).then(responce =>{
        return responce.data
   });
}

export const getTimetablePerDayAPI = (dateTime)  =>{

    //"/forGroup?groupDTO="
    //"/forLectural?lectural="
    var path = "/" + dateTime;
    
        return instance.get(path).then(responce =>{
            debugger
             return responce.data
        });
    }
    