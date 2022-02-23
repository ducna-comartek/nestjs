import { BadRequestException, InternalServerErrorException } from "@nestjs/common";
import { IsEmail, IsPhoneNumber, IsString ,IsMobilePhone, ArrayNotEmpty} from "class-validator";

export class ValidateDto{
    @IsEmail()
    email: string

    @IsString()
    username: string

    @IsString()
    password: string

    @ArrayNotEmpty()
    arrayUser: string[]
}