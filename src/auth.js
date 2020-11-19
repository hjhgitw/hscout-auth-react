import { OAuth2PopupFlow } from 'oauth2-popup-flow';
//%%CLIENT_ID%%
export default new OAuth2PopupFlow({
  authorizationUri: 'https://secure.helpscout.net/authentication/authorizeClientApplication',
  clientId: 'CUFgxbQTS8mb2Ei88s8EN9YR7wt7NWjr',
  redirectUri: 'https://help-scout.netlify.app/redirect',
  scope: 'openid profile',
  responseType: 'id_token',
  accessTokenResponseKey: 'id_token',
  additionalAuthorizationParameters: {
    nonce: Math.random().toString(),
  },
});