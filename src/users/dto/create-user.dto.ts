import { IsBoolean, IsEmail, IsString, IsUUID } from "class-validator";


export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsBoolean()
    isBanned: boolean;


    //faltan
    // @IsUUID()
    //role: Role; //(admin/user)




}
