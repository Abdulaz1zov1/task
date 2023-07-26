import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { LocationService } from '../location/location.service'
import { LocationEntity } from '../location/entities/location.entity'
import { CreateLocationInput } from '../location/dto/create-location.input'
import { UpdateLocationInput } from '../location/dto/update-user.input'

@Resolver('User')
export class LocationResolver {
	constructor(
		private readonly userService: LocationService,
	) {
	}

	@Mutation(() => LocationEntity)
	async createUser(@Args('createUser') createLocationInput: CreateLocationInput): Promise<LocationEntity> {
		return await this.userService.createUser(createLocationInput)
	}

	@Mutation(() => LocationEntity)
	async updateUser(@Args('updateUser') updateLocationInput: UpdateLocationInput): Promise<LocationEntity> {
		return await this.userService.updateUser(updateLocationInput)
	}

	@Mutation(() => Number)
	async removeUser(@Args('id') id: number): Promise<number> {
		return await this.userService.removeUser(id)
	}

	@Query(() => LocationEntity)
	async getOneUser(@Args('id') id: number): Promise<LocationEntity> {
		return await this.userService.getOneUser(id)
	}

	@Query(() => [ LocationEntity ])
	async getAllUsers(): Promise<LocationEntity[]> {
		return await this.userService.getAllUsers()
	}
}
