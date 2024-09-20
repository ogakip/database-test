import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';
import { Rowitem } from './rowItem.entity';

@Entity()
export class Sections {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column("text")
    title: string

    @Column("text")
    path: string

    @OneToMany(() => Rowitem, rowitem => rowitem.section)
    rowitems: Rowitem[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
