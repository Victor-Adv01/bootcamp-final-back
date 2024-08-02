import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
const crypto = require('crypto')

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}


  async create(createUserDto: CreateUserDto) {
    const { email, password, name, lastName, isBanned, role} = createUserDto;
    const hashPass = crypto.createHash('sha256').update(password).digest('hex');

    return await this.userRepository.save({email, name, lastName, password: hashPass, isBanned, role});
  }

  async findAll() {
    const data = await this.userRepository.find({
      order: { lastName: 'ASC'},
      relations: ['role', 'reviews', 'comments', 'reviews.movie']
    })
    return data;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      relations: ['role', 'reviews', 'comments', 'reviews.movie']
    });
    if (!user) throw new BadRequestException(`The user ${id} doesn't exist.`)
    return { user: {id: user.id, email: user.email, name: user.name, lastName: user.lastName, reviews: user.reviews}}
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      // relations: {role: true, reviews: true, comments: true}
    });
    if (!user) throw new BadRequestException(`The user ${id} doesn't exist.`)
     await this.userRepository.update({ id: id }, updateUserDto);
    return await this.findAll()
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
