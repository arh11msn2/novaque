import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import {ArticlesView} from './articles.view';

import {Article} from './infrastructure/entities/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticlesController],
  providers: [TypeOrmModule, ArticlesService, ArticlesView],
  exports: [TypeOrmModule, ArticlesService],
})
export class ArticlesModule {}
