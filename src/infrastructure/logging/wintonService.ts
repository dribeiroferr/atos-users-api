import winston from "winston";
import { LoggingService } from "./loggingService";

export class WinstonLoggingService implements LoggingService {
    private logger: winston.Logger;

    constructor(){
        this.logger = winston.createLogger({
            transports: [new winston.transports.Console()],
        });
    }
    public info(message: string, context?: string): void {
        this.logger.info({ message, context });
    }

    public error(message: string, context?: string, error?: Error): void {
        if(error){
            this.logger.error(`${message}: ${error.message}`);
        }else { 
            this.logger.error({ message, error });
        }
    }

    public warn(message: string, context?: string): void {
        this.logger.warn({ message, context });
    }
}