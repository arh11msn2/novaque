import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import {ArticlesView} from './articles.view';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesView],
})
export class ArticlesModule {}
