import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { MoviesService } from 'src/movies/movies.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly moviesService: MoviesService,
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ){}


  async create(createReviewDto: CreateReviewDto) {
     await this.reviewRepository.save(createReviewDto);
    const movies = await this.moviesService.findAll()
    return movies
  }

  async findAll() {
    const data = await this.reviewRepository.find({
      order: { rating: 'DESC'},
      relations: { movie: true, user: true, comments: true }
      //relations: { movies: true, users: tue},
      
    })
    return data;
  }

  async findOne(id: string) {
    const review =  await this.reviewRepository.findOne({
      where: { id: id },
    });
    if (!review) throw new BadRequestException(`The review ${id} doesn't exist.`)
      return review
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    const review =  await this.reviewRepository.findOne({
      where: { id: id },
    });
    if (!review) throw new BadRequestException(`The review ${id} doesn't exist.`)
     await this.reviewRepository.update({ id: id }, updateReviewDto);
    const users = this.usersService.findAll()
    return users
  }

  async remove(id: string) {
    const review =  await this.reviewRepository.findOne({
      where: { id: id },
    });
    if (!review) throw new BadRequestException(`The review ${id} doesn't exist.`)
     await this.reviewRepository.delete({ id: id});
    const users = this.usersService.findAll()
    return users
  }
}
