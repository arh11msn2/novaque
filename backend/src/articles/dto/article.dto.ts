import {AuthorDto} from 'src/authors/dto';
import {CommentDto} from 'src/comments/dto';

export type ArticleDto = {
    id?: number;
    title: string;
    content: string;
    image?: string;
    author: AuthorDto;
    likesCount?: number;
    comments?: CommentDto[];
    relatedArticles?: ArticleDto[];
};
