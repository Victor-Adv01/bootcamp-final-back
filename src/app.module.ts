import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), MoviesModule, UsersModule, ReviewsModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
