import * as dotenv from "dotenv";
dotenv.config({
    path: process.env.NODE_ENV = 'dev' ? '.env.dev' : '.env'
});

export const jwtConfig = { 
    secretKey: process.env.JWT_SECRET_KEY,
    accessTokenExpiration: '1h',
    refreshTokenExpiration: '7d',
    userAccessTokenExpiration: '1h',
    userRefreshTokenExpiration: '7d'
}