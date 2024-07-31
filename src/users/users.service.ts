import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}


  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    const data = await this.userRepository.find({
      order: { lastName: 'ASC'},
      relations: {reviews: true, role: true, comments: true}
    })
    return data;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      // relations: {role: true, reviews: true, comments: true}
    });
    if (!user) throw new BadRequestException(`The user ${id} doesn't exist.`)
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      // relations: {role: true, reviews: true, comments: true}
    });
    if (!user) throw new BadRequestException(`The user ${id} doesn't exist.`)
    return await this.userRepository.update({ id: id }, updateUserDto);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      // relations: {role: true, reviews: true, comments: true}
    });
    if (!user) throw new BadRequestException(`The user ${id} doesn't exist.`)
   await this.userRepository.delete({ id: id });
  }
}
