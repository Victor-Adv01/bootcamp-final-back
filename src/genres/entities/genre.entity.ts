import { Movie } from "src/movies/entities/movie.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genre {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column('text')
name: string;

@OneToMany(() => Movie, movie => movie.genre)
movie: Movie[]
}
