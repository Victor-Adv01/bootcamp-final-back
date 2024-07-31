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

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), MoviesModule, UsersModule, ReviewsModule, CommentsModule, RolesModule, GenresModule, SignupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
