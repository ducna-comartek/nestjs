import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidateDto } from './dto/validate';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCar() {
    return this.appService.getCars();
  }

  @Post('/users')
  createUser(@Body() data: ValidateDto){
    return data
  }
  
}
