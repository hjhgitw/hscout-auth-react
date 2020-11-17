import { OAuth2PopupFlow } from 'oauth2-popup-flow';

export default new OAuth2PopupFlow({
  authorizationUri: 'https://secure.helpscout.net/authentication/authorizeClientApplication',
  clientId: 'CUFgxbQTS8mb2Ei88s8EN9YR7wt7NWjr',
  redirectUri: 'http://localhost:8080/redirect',
  scope: 'openid profile',
  responseType: 'id_token',
  accessTokenResponseKey: 'id_token',
  additionalAuthorizationParameters: {
    nonce: Math.random().toString(),
  },
});
