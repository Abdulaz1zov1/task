import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateLocationInput {
	@Field()
	lang: number

	@Field()
	leng: number
}