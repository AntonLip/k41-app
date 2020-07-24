import { createUserManager } from 'redux-oidc'
import * as axios from "axios"

const config = {
    authority: 'http://localhost:5001/',
    client_id: 'SPA.client',
    client_secret : "SecretSPA",
    redirect_uri: 'http://localhost:3000/Login',
    popup_post_logout_redirect_uri: 'http://localhost:3000/MyNews',
    response_type: 'code',
    scope: 'openid profile email api offline_access', 
    loadUserInfo: true,
    monitorSession: false,
  };

  var conf = {
    authority: "http://localhost:5001/",
    client_id: "SPA.client",
    redirect_uri: "http://localhost:3000",
    post_logout_redirect_uri:"http://localhost:3000/MyNews",

    // if we choose to use popup window instead for logins
    popup_redirect_uri: window.location.origin + "/popup.html",
    popupWindowFeatures: "menubar=yes,location=yes,toolbar=yes,width=1200,height=800,left=100,top=100;resizable=yes",

    // these two will be done dynamically from the buttons clicked, but are
    // needed if you want to use the silent_renew
    response_type: "code",
    scope: "openid profile email api1",

    // this will toggle if profile endpoint is used
    loadUserInfo: true,

    // silent renew will get a new access_token via an iframe 
    // just prior to the old access_token expiring (60 seconds prior)
    silent_redirect_uri: "http://localhost:3000",
    automaticSilentRenew: true,

    monitorAnonymousSession: true,

    // will revoke (reference) access tokens at logout time
    revokeAccessTokenOnSignout: true,

    // this will allow all the OIDC protocol claims to be visible in the window. normally a client app 
    // wouldn't care about them or want them taking up space
    filterProtocolClaims: false
};
  const mgr = createUserManager(conf);
  const instance = axios.create(
    {
        //withCredentials :true,
        baseURL: "https://localhost:44351/api/"

    }
);

/*
export const getUsers = () => {
    return instance.get()
        .then(response => {
            return response.data;
        });
}

*/

export const authMe = () =>{
  debugger;
  var resp;
  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
   'grant_type': 'client_credentials',
  'scope': 'api1' 
  });
  var config = {
    method: 'post',
    url: 'http://localhost:5001/connect/token',
    headers: { 
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA==', 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    resp = JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  debugger;
instance.headers({
  'Authorization': resp.token_type + ' ' + resp.access_token
});
  instance.get("Lecturals/Min").then(responce =>{
    return responce.data
});
}