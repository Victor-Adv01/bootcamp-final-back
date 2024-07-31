import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ){}


  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepository.save(createReviewDto);
  }

  async findAll() {
    const data = await this.reviewRepository.find({
      order: { rating: 'DESC'},
      relations: { movie: true }
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
    return await this.reviewRepository.update({ id: id }, updateReviewDto);
  }

  async remove(id: string) {
    const review =  await this.reviewRepository.findOne({
      where: { id: id },
    });
    if (!review) throw new BadRequestException(`The review ${id} doesn't exist.`)
     await this.reviewRepository.delete({ id: id});
  }
}
