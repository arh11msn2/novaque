import { Body, Controller, Post } from '@nestjs/common';

import {RegistrationService} from './registration.service';

import {RegistrationData} from './dto/registration.dto';

@Controller('registration')
export class RegistrationController {
    public constructor(
        private registrationService: RegistrationService
    ) {}

    @Post('reader')
    async registerReader(@Body() data: RegistrationData) {
        const result = await this.registrationService.registerReader(data);
        return result;
    }
}
