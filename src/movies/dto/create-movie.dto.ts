import { IsUUID, IsString, IsNumber } from 'class-validator';
import { Review } from '../../reviews/entities/review.entity';
import { Genre } from 'src/genres/entities/genre.entity';


export class CreateMovieDto {

    @IsString()
    img: string;

    @IsString()
    title: string;

    @IsNumber()
    year: number;

    @IsNumber()
    duration: number;

    @IsString()
    synopsis: string;

    @IsNumber()
    avg_rating: number

    @IsUUID()
    genre: Genre;
   
}
