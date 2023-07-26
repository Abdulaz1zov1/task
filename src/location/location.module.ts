import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { LocationEntity } from '../location/entities/location.entity'
import { LocationService } from '../location/location.service'
import { LocationResolver } from '../location/location.resolver'

@Module({
	imports: [ TypeOrmModule.forFeature([ LocationEntity ]) ],
	providers: [ LocationService, LocationResolver ],
})
export class LocationsModule {
}
