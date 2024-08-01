import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";


export class CreateCommentDto {

    @ApiProperty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsUUID()
    user: User;

    @ApiProperty()
    @IsUUID()
    review: Review;



}
