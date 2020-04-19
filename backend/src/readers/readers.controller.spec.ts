import { Test, TestingModule } from '@nestjs/testing';
import { ReadersController } from './readers.controller';

describe('Readers Controller', () => {
  let controller: ReadersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadersController],
    }).compile();

    controller = module.get<ReadersController>(ReadersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
