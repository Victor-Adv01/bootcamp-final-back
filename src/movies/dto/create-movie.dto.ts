import { IsUUID, IsString, IsNumber } from 'class-validator';
import { Review } from '../../reviews/entities/review.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { ApiProperty } from '@nestjs/swagger';


export class CreateMovieDto {

    @ApiProperty()
    @IsString()
    img: string;

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNumber()
    year: number;

    @ApiProperty()
    @IsNumber()
    duration: number;

    @ApiProperty()
    @IsString()
    synopsis: string;


    @ApiProperty()
    @IsUUID()
    genre: Genre;
   
}
