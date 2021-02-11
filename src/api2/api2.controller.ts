import { Body, Controller, Get, Post } from '@nestjs/common';
import { Api2Service } from './api2.service';
import { StatusDto } from './dto.api/status.dto';
import { Api2 } from './api2.entity';
import { Api2Dto } from './dto.api/api2.dto'

@Controller()
export class Api2Controller {
  constructor(private readonly api2Service: Api2Service) {}

  @Get('getselect')
  async getUser(): Promise<Api2[]>{
    return this.api2Service.getUser()
  }

  @Post('post')
  async cadastrar(@Body() data: Api2Dto): Promise<StatusDto>{
    return  this.api2Service.create(data)  
  } 
}


