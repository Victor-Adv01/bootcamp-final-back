import { IsUUID, IsString, IsNumber } from 'class-validator';
import { Review } from '../../reviews/entities/review.entity';


export class CreateMovieDto {

    @IsString()
    img: string;

    @IsString()
    title: string;

    @IsNumber()
    year: number;

    @IsNumber()
    duration: number;

    @IsNumber()
    avg_rating: number;


    @IsString()
    synopsis: string;

   
}
