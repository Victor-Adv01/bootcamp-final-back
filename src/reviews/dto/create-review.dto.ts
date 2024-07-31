import { IsNumber, IsString } from "class-validator";


export class CreateReviewDto {

    @IsString()
    description: string;

    @IsNumber()
    rating: number;

    //aqui faltaria
    //user: <User>;
    //movie: <Movie>;

    //?agregaría relacion con Comentarios? comments: <Comment> algo asi
}
