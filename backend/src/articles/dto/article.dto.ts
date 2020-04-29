export type ArticleDto = {
    title: string;
    content: string;
    likesCount?: number;
    relatedArticles?: any[];
}