import * as axios from "axios"

const instance = axios.create(
    {
        //withCredentials :true,
        baseURL:  "http://192.168.5.251:8081"
    }
);

export const getFilteredTimetableAPI = (lectural, discipline, group, startDate, stopDate) => {
    
    var values = 
        {
            "filterBy": {
              "lectural": lectural,
              "auditoreNumber": null,
              "discipline": discipline,
              "group": group,
              "dateStart": startDate,
              "dateEnd": stopDate
            },
            "sortBy": null
          }
    debugger;
    let path = "/api/Timetable/lesson/filtered"
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    };

    var s = JSON.stringify(values)
    return instance.post(path,s , config).then(responce => {
        debugger
        return responce.data
    }).catch((error) => {
        debugger
        console.log("Api createOficerAPI error");        
    });
}