import jwt from "jsonwebtoken";
import { WinstonLoggingService } from "../../infrastructure/logging/wintonService";
import { TokenPayloadDTO } from "../../infrastructure/dtos/tokens/tokenPayloadDTO";
import { TokenErrors } from "./tokenErrors";
import { User } from "../../users/domain/user";

export class TokenService {
    private secretKey: string;
    private logger: WinstonLoggingService;

    constructor(
        secretKey: string,
        logger: WinstonLoggingService,
        ){
        this.secretKey = secretKey;
        this.logger = logger;
    };

    public generateAccessToken(payload: TokenPayloadDTO, expiresIn: string): string {
        try {
            const token: string = jwt.sign(payload, this.secretKey, { expiresIn });
            
            if(!token){
                throw new Error("Failed at generate a new Token");
            }
            
            this.logger.info('Access token generated successfully');
            
            return token;
        } catch (error) {
            this.handleTokenError('Failed at generete a new token', error);
            return error;
        } 

    };

    public generateRefreshToken(payload: TokenPayloadDTO, expiresIn: string): string {
        try {
            const token: string = jwt.sign(payload, this.secretKey, { expiresIn });
            
            if(!token){
                throw new Error("Failed at refresh a new token");
            }

            this.logger.info('Access token refreshed successfully');

            return token;
        } catch (error) {
            this.handleTokenError('Failed at refresh token', error);
            return error;
        }         
    };

    public verifyToken(token: string): TokenPayloadDTO {
        return jwt.verify(token, this.secretKey) as TokenPayloadDTO;
    };

    public refreshTokenValid(refreshToken: string, user: User): boolean | { isValid: false, error: string } {
        try {
            const decoded = jwt.verify(refreshToken, this.secretKey) as TokenPayloadDTO;
            if(decoded.sub !== user.id){
                return { isValid: false, error: 'Refresh token does not belong to the user.'};
            }
            return true
            
        } catch (error) {
            this.handleTokenError('Refresh token verification failed', error);
            return false;
        }
    }

    private handleTokenError(message: string, error: any): void {
        this.logger.error(message, error);
    }
}