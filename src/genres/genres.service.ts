import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenresService {

constructor(
  @InjectRepository(Genre)
  private readonly genresRepository: Repository<Genre>
){}

  create(createGenreDto: CreateGenreDto) {
    return this.genresRepository.save(createGenreDto)
  }

  findAll() {
    return this.genresRepository.find({relations: {movie: true}})
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} genre`;
  // }

  // update(id: number, updateGenreDto: UpdateGenreDto) {
  //   return `This action updates a #${id} genre`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} genre`;
  // }
}
