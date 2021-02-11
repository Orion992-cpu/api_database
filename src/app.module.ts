import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { Api2Module } from './api2/api2.module';

@Module({
  imports: [
    ApiModule,
    Api2Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}