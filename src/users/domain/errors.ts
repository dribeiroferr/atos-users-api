import { ErrorBase } from "../../utils/errors/index";
import { UserErrorNameType, HttpStatusCodeType, UserErrorMessageType } from "../../utils/errors/enums/userEnums";
export class UserEntityErrors extends ErrorBase<UserErrorNameType, UserErrorMessageType, HttpStatusCodeType> {
    constructor(
        errorName: UserErrorNameType, 
        errorMessage: UserErrorMessageType, 
        errorCode: HttpStatusCodeType
    ){
        super({
            name: errorName,
            message: errorMessage, 
            code: errorCode
        });
    }
}