import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    public constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get()
    async getUsers() {
        return this.usersService.getList();
    }
}
