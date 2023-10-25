export const tokenErrorNames = {
    // General Errors
    TokenGenerationFailed: 'Token generation failed',
    TokenInvalid: 'Invalid token',
    TokenExpired: 'Token has expired',
  
    // Add more token-related error names as needed
  } as const;
  
  export const tokenErrorTypes = {
    TokenError: 'Token Error',
  } as const;
  
  export const tokenErrorCodes = {
    InvalidToken: 'invalid_token',
    TokenExpired: 'token_expired',
    TokenGenerationError: 'token_generation_error',
    // Add more token-related error codes as needed
  } as const;

  export const httpStatusCode = { 
        // Informational
        Continue : 100,
        SwitchingProtocols : 101,
        Processing : 102,
    
        // Success
        OK : 200,
        Created : 201,
        Accepted : 202,
        NoContent : 204,
        ResetContent : 205,
        PartialContent : 206,
    
        // Redirection
        MultipleChoices : 300,
        MovedPermanently : 301,
        Found : 302,
        SeeOther : 303,
        NotModified : 304,
        TemporaryRedirect : 307,
        PermanentRedirect : 308,
    
        // Client Errors
        BadRequest : 400,
        Unauthorized : 401,
        PaymentRequired : 402,
        Forbidden : 403,
        NotFound : 404,
        MethodNotAllowed : 405,
        NotAcceptable : 406,
        RequestTimeout : 408,
        Conflict : 409,
        Gone : 410,
        PreconditionFailed : 412,
        UnprocessableEntity : 422,
        TooManyRequests : 429,
    
        // Server Errors
        InternalServerError : 500,
        NotImplemented : 501,
        BadGateway : 502,
        ServiceUnavailable : 503,
        GatewayTimeout : 504,
        HTTPVersionNotSupported : 505
  } as const;
  
  export const createTokenErrorsMessages = (
    entityName: string,
    errorNames: typeof tokenErrorNames,
    errorCodes: typeof tokenErrorCodes,
    errorTypes: typeof tokenErrorTypes
  ) => {
    return {
      [`TokenErrors${entityName}`]: errorNames,
      [`TokenErrors${entityName} code`]: errorCodes,
      [`TokenErrors${entityName} type`]: errorTypes,
    };
  };

  const tokenErrorMessage = {
    message: tokenErrorNames
  } as const;

  export type TokenErrorNamesType = keyof typeof tokenErrorNames;
  export type HTTPStatusCodeType = keyof typeof httpStatusCode;
  export type TokenErrorMessageType = keyof typeof tokenErrorMessage;