import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
    audience: 'chicksxpress-api',
    issuerBaseURL: 'https://dev-zf8hs08chh22po4a.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });