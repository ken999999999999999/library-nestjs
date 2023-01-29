import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller as NestController } from '@nestjs/common';

export const Controller = (path: string) => {
  return applyDecorators(ApiBearerAuth(), NestController(path), ApiTags(path));
};
