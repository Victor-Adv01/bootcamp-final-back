import { IsString } from "class-validator";
import { Comment } from "src/comments/entities/comment.entity";
import { Movie } from "src/movies/entities/movie.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('review')
export class Review {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    description: string;

    @Column('float')
    rating: number;



    //probar:
    @ManyToOne(() => Movie, movie => movie.reviews)
    movie: Movie;

    @ManyToOne(()=> User, user => user.reviews)
    user: User;
  
    @OneToMany(() => Comment, comment => comment.review)
    comments: Comment[];
    
}
