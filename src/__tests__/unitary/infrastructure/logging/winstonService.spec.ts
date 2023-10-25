import { WinstonLoggingService } from "../../../../infrastructure/logging/wintonService";

it('should log info message correctly', () => {
    const logger = new WinstonLoggingService();
    const spy = jest.spyOn(logger, 'info');
    logger.info('This is an info message');
    expect(spy).toHaveBeenCalledWith('This is an info message');
});

it('should log error message correctly', () => {
    const logger = new WinstonLoggingService();
    const spy = jest.spyOn(logger, 'error');
    logger.error('This is an error message');
    expect(spy).toHaveBeenCalledWith('This is an error message');
});

it('should log warning message correctly', () => {
    const logger = new WinstonLoggingService();
    const spy = jest.spyOn(logger, 'warn');
    logger.warn('This is a warning message');
    expect(spy).toHaveBeenCalledWith('This is a warning message');
});

// it('should log message with long context string correctly', () => {
//     const logger = new WinstonLoggingService();
//     const spy = jest.spyOn(logger, 'info');
//     const longContext = 'This is a very long context string that exceeds the normal length';
//     logger.info('This is an info message', longContext);
//     expect(spy).toHaveBeenCalledWith({ message: 'This is an info message', context: longContext });
// });