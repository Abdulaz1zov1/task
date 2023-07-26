import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LocationEntity } from '../location/entities/location.entity'
import { Repository } from 'typeorm'
import { CreateLocationInput } from '../location/dto/create-location.input'
import { UpdateLocationInput } from '../location/dto/update-user.input'

@Injectable()
export class LocationService {
	constructor(
		@InjectRepository(LocationEntity)
		private readonly userRepository: Repository<LocationEntity>,
	) {
	}

	async createUser(createLocationInput: CreateLocationInput): Promise<LocationEntity> {
		return await this.userRepository.save({ ...createLocationInput })
	}

	async getOneUser(id: number): Promise<LocationEntity> {
		return await this.userRepository.findOne({ id })
	}

	async getAllUsers(): Promise<LocationEntity[]> {
		return await this.userRepository.find()
	}

	async removeUser(id: number): Promise<number> {
		await this.userRepository.delete({ id })
		return id
	}

	async updateUser(updateLocationInput: UpdateLocationInput): Promise<LocationEntity> {
		await this.userRepository.update({ id: updateLocationInput.id }, { ...updateLocationInput })
		return await this.getOneUser(updateLocationInput.id)
	}
}
