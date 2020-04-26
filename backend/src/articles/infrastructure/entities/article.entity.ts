import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

import {Comment} from '../../../comments/infrastructure/entities/comment.entity';
import {User} from '../../../users/infrastructure/entities/user.entity';
 
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(type => Comment, comment => comment.article)
  comments: Comment[];

  @ManyToOne(type => User, author => author.articles)
  author: User;

  @Column({
    nullable: true,
  })
  publishedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
}