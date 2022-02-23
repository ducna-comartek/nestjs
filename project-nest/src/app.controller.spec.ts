import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService)
  });

  describe('/Get', () => {
    it('should return all of my CARs',async () => {
      const result = [{
        id : '123',
        brand : 'kia',
        color : 'gold',
        model : 'likenew'
      }]
      jest.spyOn(appService, 'getCars').mockImplementation(async () => result)
      expect(await appController.getCar()).toBe(result);
    });
  });

  describe('/Post', () => {
    it('should create data', async () =>{
      expect(appController.createUser({
        "email" : "caoduc354@gmail.com",
        "username": "cad",
        "password": "123",
        "arrayUser": ['cad']
      })).toEqual({
        "email": "caoduc354@gmail.com",
        "username": "cad",
        "password": "123",
        "arrayUser": ['cad']
      })
    })
  })
});
