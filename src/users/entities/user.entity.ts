import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Review } from '../../reviews/entities/review.entity';
import { Comment } from "src/comments/entities/comment.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column('text')
    name: string;

    @Column('text')
    lastName: string;

    @Column('text')
    email: string;

    @Column('text')
    password: string;

    @Column('bool')
    isBanned: boolean;

    //relaciones con rol y review


    @OneToMany(() => Review, (review) => review.user)
    reviews: Review[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];




}
