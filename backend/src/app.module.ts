import { Module } from '@nestjs/common';
import {Connection} from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';

import {Article} from './articles/infrastructure/entities/article.entity';
import {Comment} from './comments/infrastructure/entities/comment.entity';
import {User} from './users/infrastructure/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './novaque.sqlite',
      entities: [
        Article,
        Comment,
        User,
      ],
      synchronize: true,
    }),
    ArticlesModule,
    AuthModule,
    UsersModule,
    CommentsModule,
    LikesModule,
    AuthModule,
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
