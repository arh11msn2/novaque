import {lorem, image, name, date, random} from 'faker';

import { Injectable } from '@nestjs/common';
import { ArticleDto } from './dto';

const getRandomArticle = (id) => ({
    id,
    title: lorem.sentence(),
    content: lorem.paragraphs(),
    image: image.imageUrl(),
    author: {
        id,
        firstName: name.firstName(),
        lastName: name.lastName(),
        userId: id,
        birthday: date.between('1970-01-01', '2000-01-01'),
        createdAt: new Date(),
    },
    likesCount: random.number(),
    comments: [{
        id: 1,
        text: lorem.sentence(),
        createdAt: new Date(),
    }, {
        id: 2,
        text: lorem.sentence(),
        createdAt: new Date(),
    }, {
        id: 3,
        text: lorem.sentence(),
        createdAt: new Date(),
    }]
});

@Injectable()
export class ArticlesService {
    protected articles: ArticleDto[] = [...Array(100).keys()].map(it => getRandomArticle(it+1));

    public getOne(id: number): ArticleDto|undefined {
        const result = this.articles.find(it => it.id === id);
        const relatedrticles = this.articles.sort((_, __) => Math.random() - 0.5).slice(0, 3);
        result.relatedArticles = relatedrticles;
        return result;
    }

    public getList(): ArticleDto[] {
        return this.articles.sort((a, b) => a.id - b.id);
    }

    public add(data: ArticleDto): ArticleDto {
        const result = {
            ...data,
            id: this.nextId,
        };
        this.articles.push(result);
        return result;
    }

    protected get nextId(): number {
        return 1 + Math.max(...this.articles.map(it => it.id!));
    }
}
