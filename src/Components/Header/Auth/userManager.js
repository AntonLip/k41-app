import { createUserManager } from 'redux-oidc'

const userManagerConfig = {
  authority: 'http://localhost:5001',
  client_id: 'SPA.client',
  redirect_uri: 'http://localhost:3000/',
  post_logout_redirect_uri: 'http://localhost:3000',
  response_type: 'application/json;',
  scope: 'openid profile api1',
  loadUserInfo: true,
  monitorSession: false,
}

const userManager = createUserManager(userManagerConfig)

export default userManager