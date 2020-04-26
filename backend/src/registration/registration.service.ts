import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegistrationData } from './dto/registration.dto';

import {User} from '../users/infrastructure/entities/user.entity';

@Injectable()
export class RegistrationService {
    public constructor(
        private usersService: UsersService
    ) {}

    public async registerReader(data: RegistrationData): Promise<User> {
        const reader = await this.usersService.add(data);
        return reader;
    }
}
