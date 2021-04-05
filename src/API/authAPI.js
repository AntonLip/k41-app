import { createUserManager } from 'redux-oidc'
let path = "http://k41.kafedra41.local/IS"//"http://localhost:5001/" 
const config = {
  // the URL of our identity server
  authority: path,
  // this ID maps to the client ID in the identity client configuration
  client_id: "mvc",
  // URL to redirect to after login
  redirect_uri: 'http://k41.Kafedra41.local:90/signin-oidc' ,   //"http://localhost:3000/signin-oidc"
  response_type: "id_token token",
  // the scopes or resources we would like access to
  scope: "openid profile  api1 ", //email phone address family_name given_name Role position
  // URL to redirect to after logout http://localhost:3000/signout-callback-oidc
  client_secret: "secret",
  post_logout_redirect_uri: "http://k41.Kafedra41.local:90/signout-callback-oidc" ,//"http://localhost:3000/signout-callback-oidc"
  loadUserInfo: true
};

// initialise!
const userManager = new createUserManager(config)

export var AuthMe = (props) => {
  
  userManager.signinRedirect();
}
export var LogOutMe = () => {       
  userManager.signoutRedirect();
}

export var GetUser = () => {

  return userManager.getUser().then(responce => {
    
    if (responce) {
      return responce
    }
    else {
      console.log("User is null");
    }
  });
}


export var RedirectAuth = () => {
  userManager.signinRedirectCallback().then(function () {
    window.location = "/";
  }).catch(function (e) {
    console.error(e);
  });
}

export const GetUserInfo = () =>{


}