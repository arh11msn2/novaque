import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import {Article} from '../../../articles/infrastructure/entities/article.entity';
import {User} from '../../../users/infrastructure/entities/user.entity';
 
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(type => Article, article => article.comments)
  article: Article;

  @ManyToOne(type => User, author => author.articles)
  author: User;

  @Column()
  lastName: string;

  @Column()
  publishedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
}