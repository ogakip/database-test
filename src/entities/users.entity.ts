import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @Column("text")
    username!: string

    @Column("text")
    pass!: string

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @Column("boolean")
    isFirstLogin!: boolean
}
