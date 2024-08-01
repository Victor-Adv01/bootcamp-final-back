import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CommentsModule } from './comments/comments.module';
import { RolesModule } from './roles/roles.module';
import { GenresModule } from './genres/genres.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), MoviesModule, UsersModule, ReviewsModule, CommentsModule, RolesModule, GenresModule, SignupModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
