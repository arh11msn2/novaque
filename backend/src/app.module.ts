import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { AuthorsModule } from './authors/authors.module';
import { ReadersModule } from './readers/readers.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ArticlesModule, AuthModule, AuthorsModule, ReadersModule, UsersModule, CommentsModule, LikesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
