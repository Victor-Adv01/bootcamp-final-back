import { IsString } from "class-validator";


export class CreateCommentDto {

    // probar y solucionar
    @IsString()
    content: string;



}
