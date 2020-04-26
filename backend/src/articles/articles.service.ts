import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {ArticleDto} from './dto/article.dto';

import {Article} from './infrastructure/entities';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articlesRepository: Repository<Article>,
      ) {}

    public async getOne(id: number): Promise<Article|null> {
        const result = await this.articlesRepository.findOne(id);
        return result;
    }

    public async getList(): Promise<Article[]> {
        return this.articlesRepository.find({
            order: {
                createdAt: 'ASC'
            }
        });
    }

    public async add(data: ArticleDto): Promise<Article> {
        const article = await this.articlesRepository.save(data);
        return article;
    }

    public async fillFakes(): Promise<void> {
        console.log();
    }
}
