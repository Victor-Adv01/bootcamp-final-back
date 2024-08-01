import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { error } from 'console';
import { JwtService } from '@nestjs/jwt';
const crypto = require('crypto');


@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ){}

  async create(createLoginDto: CreateLoginDto) {
    const { email, password } = createLoginDto;
    const hashPass = crypto.createHash('sha256').update(password).digest('hex');
    
    const user = await this.userRepository.findOne({
      where: { email: email, password: hashPass },
      relations: { role: true, comments: true, reviews: true }
    })

    if(!user) throw new UnauthorizedException('Incorrect credentials');
    if(user.isBanned) throw new UnauthorizedException('You have been banned.')
    const token = this.jwtService.sign({ user: {id: user.id, role: user.role.name}}, {expiresIn: 1000000, secret: 'secretkey'});
    
    return { user: {id: user.id, role: user.role.name}, token };
  }

}
