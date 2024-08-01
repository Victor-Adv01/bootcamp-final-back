import { Genre } from "src/genres/entities/genre.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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

    // @Column('float')
    // avg_rating: number;


    @Column('text')
    synopsis: string;



    //otra forma, quizas mas clara agregando atributo movie:
    @OneToMany(() => Review, review => review.movie)
    reviews: Review[];

    //TODO: falta relacion N:1
    @ManyToOne(() => Genre, (gen) => gen.movie)
    genre: Genre;
}
