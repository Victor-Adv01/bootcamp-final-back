import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString, IsUUID } from "class-validator";
import { Role } from "src/roles/entities/role.entity";


export class CreateUserDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsBoolean()
    isBanned: boolean;


    @IsUUID()
    role: Role;




}
