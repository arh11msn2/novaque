import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import {ArticlesView} from './articles.view';

import {Article} from './infrastructure/entities/article.entity';
import { UsersService } from 'src/users/users.service';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), UsersModule],
  controllers: [ArticlesController],
  providers: [TypeOrmModule, ArticlesService, ArticlesView, UsersService],
  exports: [TypeOrmModule, ArticlesService],
})
export class ArticlesModule {}
