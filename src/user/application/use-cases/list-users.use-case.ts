import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  
} from '../ports/user.repository.port';
import type { UserRepositoryPort } from '../ports/user.repository.port';
@Injectable()
export class ListUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  async execute() {
    return this.userRepository.findAll();
  }
}