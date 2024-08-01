import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID } from "class-validator";
import { Movie } from "src/movies/entities/movie.entity";
import { User } from "src/users/entities/user.entity";


export class CreateReviewDto {

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNumber()
    rating: number;

    @ApiProperty()
    @IsUUID()
    user: User;

    @ApiProperty()
    @IsUUID()
    movie: Movie;

}
