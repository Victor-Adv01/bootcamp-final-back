import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignupService } from './signup.service';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('SignUp')
@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  create(@Body() createSignupDto: CreateSignupDto) {
  
    return this.signupService.create(createSignupDto);
  }

}
