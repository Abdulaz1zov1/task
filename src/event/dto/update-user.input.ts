import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
	@Field(() => ID)
	id: number

	@Field({ nullable: true })
	start_date: string

	@Field({ nullable: true })
	end_date: string

	@Field({ nullable: true })
	name: string

	@Field({ nullable: true })
	description: string
}