import { Controller, Body, Get, Param, Post, Request, UseGuards} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import {ArticlesService} from './articles.service';
import {ArticlesView} from './articles.view';

import {UsersService} from '../users/users.service';

@Controller('articles')
export class ArticlesController {
    public constructor(
        protected artilcesServise: ArticlesService,
        protected readonly articlesView: ArticlesView,
        protected usersService: UsersService
    ) {}

    @Get(':id')
    async getArtilceById(@Param('id') id: string) {
        const article = await this.artilcesServise.getOne(Number(id));
        const result = article && this.articlesView.forReader(article);
        return result;
    }

    @Get()
    async getArtilces() {
        const articles = await this.artilcesServise.getList();
        const views = articles.map(this.articlesView.forReaderAsCard);
        return views;
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async addArticle(
        @Body() data: any,
        @Request() req: any
    ) {
        const author = await this.usersService.getById(req.user.userId);
        return this.artilcesServise.add({
            ...data,
            author
        });
    }
}
