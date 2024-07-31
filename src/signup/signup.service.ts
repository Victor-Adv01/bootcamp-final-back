import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
const crypto = require('crypto');

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>
  ){}

  async create(createSignupDto: CreateSignupDto) {
    const { email, password, name, lastName} = createSignupDto;
    const userExist = await this.userRepository.findOne({

      where: { email: email }
    })

    if(userExist) throw new BadRequestException('User email already in use');

    const hashPass = crypto.createHash('sha256').update(password).digest('hex');
    const basic = await this.rolesRepository.findOne({where: {name: 'basic'}})

    return await this.userRepository.save({ email, password: hashPass, name, lastName, role: basic, isBanned: false });
  }

}

