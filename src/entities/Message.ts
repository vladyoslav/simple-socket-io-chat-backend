import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    nickname: string

  @Column()
    text: string
}
