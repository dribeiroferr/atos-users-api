export interface LoggingService { 
    info(message: string, context?: string): void;
    error(message: string, context?: string, error?: Error): void;
    warn(message: string, context?: string): void;
}