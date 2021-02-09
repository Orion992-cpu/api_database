import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UsersController } from './users.controller';


@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        UserRepository,
        UserService,
    ]
    
})
export class UsersModule {}
