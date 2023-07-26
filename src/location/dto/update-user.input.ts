import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateLocationInput {
	@Field(() => ID)
	id: number

	@Field({ nullable: true })
	lang: number

	@Field({ nullable: true })
	leng: number
}