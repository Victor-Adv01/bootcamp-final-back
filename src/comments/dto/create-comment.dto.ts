import { IsString, IsUUID } from "class-validator";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";


export class CreateCommentDto {

    @IsString()
    content: string;

    @IsUUID()
    user: User;

    @IsUUID()
    review: Review;



}
