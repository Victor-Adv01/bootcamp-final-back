import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comment')
export class Comment {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    content: string;
    
    // una vez seteado puede ser opcion:
    @ManyToOne(() => Review, review => review.comments,  { onDelete: 'CASCADE' })
    review: Review;

    //faltaria users N a 1
    @ManyToOne(()=> User, user => user.comments)
    user: User;
}
