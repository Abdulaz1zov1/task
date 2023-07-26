import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
	@Field()
	start_date: string

	@Field()
	end_date: string

	@Field()
	name: string

	@Field({ nullable: true })
	description: string
}