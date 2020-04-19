import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users: any[] = [{
        id: 1,
        email: 'novaque@yopmail.com',
        password: '123ololo',
    }];

    getByEmail(email: string): any|undefined {
        Logger.warn(email);
        return this.users.find(it => it.email === email);
    }
}
