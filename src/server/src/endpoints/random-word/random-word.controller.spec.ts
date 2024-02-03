import { Test, TestingModule } from '@nestjs/testing';
import { RandomWordController } from './random-word.controller';

describe('RandomWordController', () => {
  let controller: RandomWordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomWordController],
    }).compile();

    controller = module.get<RandomWordController>(RandomWordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
