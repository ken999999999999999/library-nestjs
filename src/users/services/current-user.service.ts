import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class CurrentUserService {
  get userId(): string {
    return this.req.user.id;
  }

  constructor(@Inject(REQUEST) private readonly req) {}
}
