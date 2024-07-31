import { IsBoolean, IsEmail, IsString } from "class-validator";


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
    //role: <Role>(admin/user)
    //reviews: <Review>



}
