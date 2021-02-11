import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { StatusDto } from './dto.api/status.dto';
import { Api } from './api.entity';
import { ApiDto } from './dto.api/api.dto'

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('getselect')
  async getUser(): Promise<Api[]>{
    return this.apiService.getUser()
  }

  @Post('post')
  async cadastrar(@Body() data: ApiDto): Promise<StatusDto>{
    return  this.apiService.create(data)  
  } 
}


