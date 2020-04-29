import {Injectable} from '@nestjs/common';

import {ArticleDto} from './dto/article.dto';

@Injectable()
export class ArticlesView {
    public forReader(dto: ArticleDto): Partial<ArticleDto> {
        return {
            ...dto,
            likesCount: 1,
            relatedArticles: [],
        };
    }

    public forReaderAsCard(dto: ArticleDto): Partial<ArticleDto> {
        return {
            ...dto,
            likesCount: 1,
            relatedArticles: [],
        };
    }
}
