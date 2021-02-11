import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { api2Providers } from './api2.providers';
import { Api2Service } from './api2.service';
import { Api2Controller } from './api2.controller';


@Module({
    imports: [DatabaseModule],
    controllers: [Api2Controller],
    providers: [
        ...api2Providers,
        Api2Service,

    ]
    
})
export class Api2Module {}
