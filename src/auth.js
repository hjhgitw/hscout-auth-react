import { OAuth2PopupFlow } from 'oauth2-popup-flow';

export default new OAuth2PopupFlow({
  authorizationUri: 'https://secure.helpscout.net/authentication/authorizeClientApplication',
  clientId: '%%CLIENT_ID%%',
  redirectUri: 'https://help-scout.netlify.app/redirect',
  scope: 'openid profile',
  responseType: 'id_token',
  accessTokenResponseKey: 'id_token',
  additionalAuthorizationParameters: {
    nonce: Math.random().toString(),
  },
});