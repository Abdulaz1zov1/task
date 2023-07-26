import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity('users')
export class UserEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number

	@Field()
	@CreateDateColumn()
	createdAt: Date

	@Field()
	@UpdateDateColumn()
	updatedAt: Date

	@Field()
	@Column()
	start_date: string

	@Field()
	@Column()
	end_date: string

	@Field({ nullable: true })
	@Column({ nullable: true })
	name: string

	@Field()
	@Column()
	description: string
}