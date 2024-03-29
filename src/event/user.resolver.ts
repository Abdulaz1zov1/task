import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { UserService } from '../event/user.service'
import { UserEntity } from '../event/entities/user.entity'
import { CreateUserInput } from '../event/dto/create-user.input'
import { UpdateUserInput } from '../event/dto/update-user.input'

@Resolver('User')
export class UserResolver {
	constructor(
		private readonly userService: UserService,
	) {
	}

	@Mutation(() => UserEntity)
	async createUser(@Args('createUser') createUserInput: CreateUserInput): Promise<UserEntity> {
		return await this.userService.createUser(createUserInput)
	}

	@Mutation(() => UserEntity)
	async updateUser(@Args('updateUser') updateUserInput: UpdateUserInput): Promise<UserEntity> {
		return await this.userService.updateUser(updateUserInput)
	}

	@Mutation(() => Number)
	async removeUser(@Args('id') id: number): Promise<number> {
		return await this.userService.removeUser(id)
	}

	@Query(() => UserEntity)
	async getOneUser(@Args('id') id: number): Promise<UserEntity> {
		return await this.userService.getOneUser(id)
	}

	@Query(() => [ UserEntity ])
	async getAllUsers(): Promise<UserEntity[]> {
		return await this.userService.getAllUsers()
	}
}
