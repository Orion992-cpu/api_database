import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { apiProviders } from './api.providers';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';


@Module({
    imports: [DatabaseModule],
    controllers: [ApiController],
    providers: [
        ...apiProviders,
        ApiService,

    ]
    
})
export class ApiModule {}
