import {Injectable} from '@nestjs/common';

import {ArticleDto} from './dto/article.dto';

@Injectable()
export class ArticlesView {
    public forReader(dto: ArticleDto): Partial<ArticleDto> {
        return dto;
    }

    public forReaderAsCard(dto: ArticleDto): Partial<ArticleDto> {
        return {
            ...dto,
        };
    }
}
