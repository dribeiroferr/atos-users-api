import { ErrorBase } from "../../utils/errors";
import { 
    TokenErrorNamesType,
    HTTPStatusCodeType,
    TokenErrorMessageType
 } from "../../utils/errors/enums/tokenEnums";

 export class TokenErrors extends ErrorBase<TokenErrorNamesType, TokenErrorMessageType, HTTPStatusCodeType>{
    constructor(
        errorName: TokenErrorNamesType,
        errorMessage: TokenErrorMessageType,
        errorCode: HTTPStatusCodeType,
    ){
        super({
            name: errorName,
            message: errorMessage, 
            code: errorCode
        });
    }
 }