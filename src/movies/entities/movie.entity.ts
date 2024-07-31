import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    img: string;

    @Column('text')
    title: string;

    @Column('int')
    year: number;

    @Column('int')
    duration: number;

    @Column('float')
    avg_rating: number;

    @Column('text')
    genre: string;

    @Column('text')
    synopsis: string;

    //relacion con review
    // @OneToMany(() => Review, (review) => review)
    // reviews: Review[];

    //otra forma, quizas mas clara agregando atributo movie:
    @OneToMany(() => Review, review => review.movie)
    reviews: Review[];
}
