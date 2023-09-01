/**
 * @enums Custom errors enums
 * @description This file contains predefined enums that help us map errors
 * 
 */

const userErrorNames = { 
    // General Errors
    InternalServerError : 'An internal server error occurred',
    BackendNotResponding : 'Backend service is not responding',

    // Validation Errors
    InvalidUserData : 'Invalid user data',
    UserNotFound : 'User not found',

    // Database Errors
    DatabaseConnectionFailed : 'Failed to establish a database connection',
    DatabaseQueryFailed : 'Failed to execute a database query',

    // Authentication and Authorization Errors
    AuthenticationFailed : 'Authentication failed',
    UnauthorizedAccess : 'Unauthorized access',

    // Entity Attributes Errors
    MissingRequiredAttributes : 'Missing required attributes',

    // Repository Errors
    UserRepositoryError : 'An error occurred while interacting with the user repository',

    // Service Errors
    UserServiceError : 'An error occurred in the user service'
} as const;

const httpStatusCode = { 
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

const userErrorType = {
    // User Authentication Errors
    Authentication : 'Authentication Error',
    InvalidCredentials : 'Invalid Credentials',
    TokenExpired : 'Token Expired',
    AccessDenied : 'Access Denied',
  
    // User Registration and Validation Errors
    Registration : 'Registration Error',
    UsernameTaken : 'Username Already Taken',
    EmailTaken : 'Email Already Taken',
    InvalidUserData : 'Invalid User Data',
  
    // User Retrieval Errors
    UserNotFound : 'User Not Found',
  
    // Internal User Errors
    Internal : 'Internal User Error'
} as const;

const userErrorCodes = { 
    InvalidInput : 'invalid_input',
    MissingToken : 'missing_token',
    InvalidToken : 'invalid_token',
    AccessDenied : 'access_denied',
    UserNotFound : 'user_not_found',
    ServerError : 'server_error'
} as const;

const createErrorsMessages = (
    entityName: string,
    errorNames: typeof userErrorNames,
    errorCodes: typeof userErrorCodes,
    errorTypes: typeof userErrorType
) => { 
    return {
        [`UserErrors${entityName}`]: errorNames,
        [`UserErrors${entityName} code`]: errorCodes,
        [`UserErrors${entityName} type`]: errorTypes 
    }
}

// implement later, a method to create a error message object with 
// all the enums created in this file and then return a typed object

// type Keys = string | number | symbol;

// type StringKeys<T> = {
//     [K in keyof T as K extends Keys ? `{K}` : never]: T[K];
// };

// const userErrorMessage = createErrorsMessages(
//     'User', 
//     userErrorNames, 
//     userErrorCodes, 
//     userErrorType
// ) as StringKeys<typeof userErrorMessage>;

// const userErrorMessage = [ `${userErrorType}`, `${userErrorCodes}`] as const;

const userMessageError = { 
    message: userErrorNames
} as const;

export type UserErrorNameType = keyof typeof userErrorNames;
export type HttpStatusCodeType = keyof typeof httpStatusCode;
export type UserErrorMessageType = keyof typeof userMessageError;