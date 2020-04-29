import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './infrastructure/entities';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    getById(id: number): Promise<User|null> {
        console.log(id);
        return this.usersRepository.findOne(id);
    }

    getByEmail(email: string): Promise<any|undefined> {
        return this.usersRepository.findOne({where: { email }});
    }

    async emailExists(email: string): Promise<boolean> {
        return Boolean(await this.getByEmail(email));
    }

    async getList(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async add(data: Partial<User>): Promise<User> {
        const user = await this.usersRepository.save(data);
        return user;
    }
}
