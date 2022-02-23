import { Injectable } from '@nestjs/common';
import { CARS } from './dto/data';

@Injectable()
export class AppService {
  private cars = CARS
  public async getCars(){
    return this.cars
  }
}
