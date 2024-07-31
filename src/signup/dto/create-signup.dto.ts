import { IsBoolean, IsEmail, IsString, IsUUID} from "class-validator";
import { Role } from "src/roles/entities/role.entity";

export class CreateSignupDto {


    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    // @IsUUID()
    // role: Role;

    // @IsBoolean()
    // isBanned: boolean;
    
}
