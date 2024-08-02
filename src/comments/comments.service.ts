import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { MoviesService } from 'src/movies/movies.service';

@Injectable()
export class CommentsService {

constructor(
  private readonly moviesService: MoviesService,
  @InjectRepository(Comment)
  private readonly commentsRepository: Repository<Comment>
){}

  async create(createCommentDto: CreateCommentDto) {
    await this.commentsRepository.save(createCommentDto)
    const movies = await this.moviesService.findAll()
    return movies
  }

  findAll() {
    return this.commentsRepository.find()
  }

 async findOne(id: string) {
    const comment = await this.commentsRepository.findOne({
      where: { id:id },
    });
    if (!comment) throw new BadRequestException(`The comment ${id} doesn't exist.`)
      return comment
  }

 async  update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentsRepository.findOne({
      where: { id:id },
    });
    if (!comment) throw new BadRequestException(`The comment ${id} doesn't exist.`)
      return await this.commentsRepository.update({id}, updateCommentDto)
    }

 async remove(id: string) {
    const comment = await this.commentsRepository.findOne({
      where: { id:id },
    });
    if (!comment) throw new BadRequestException(`The comment ${id} doesn't exist.`)
      await this.commentsRepository.delete({id})
  }
}
