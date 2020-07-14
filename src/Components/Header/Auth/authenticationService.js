import userManager from './userManager.js'

class AuthenticationService {
  signIn() {
    return userManager.signinRedirect()
  }

  signOut() {
    return userManager.signoutRedirect()
  }
}

export default new AuthenticationService()