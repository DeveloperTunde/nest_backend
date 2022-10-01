import { IsNotEmpty, IsString } from "class-validator"

export class AuthDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    dob:string;

    @IsString()
    telephone:string;

    @IsString()
    product:string;

    @IsString()
    amountpaid:string;

    @IsString()
    dateofpayment:string;

    @IsString()
    @IsNotEmpty()
    password:string;
}