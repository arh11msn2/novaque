import { Controller, Get, Param} from '@nestjs/common';

import {ArticlesService} from './articles.service';
import {ArticlesView} from './articles.view';

@Controller('articles')
export class ArticlesController {
    public constructor(
        protected artilcesServise: ArticlesService,
        protected readonly articlesView: ArticlesView
    ) {}

    @Get(':id')
    getArtilceById(@Param('id') id: string) {
        const article = this.artilcesServise.getOne(Number(id));
        const result = article && this.articlesView.forReader(article);
        return result;
    }

    @Get()
    getArtilces() {
        const articles = this.artilcesServise.getList();
        const views = articles.map(this.articlesView.forReaderAsCard);
        return views;
    }

    /*
    @Post()
    addArticle() {
        return this.artilcesServise.add();
    }
    */
}
