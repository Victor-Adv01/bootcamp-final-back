import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString, IsUUID} from "class-validator";
import { Role } from "src/roles/entities/role.entity";

export class CreateSignupDto {


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

    // @IsUUID()
    // role: Role;

    // @IsBoolean()
    // isBanned: boolean;
    
}
