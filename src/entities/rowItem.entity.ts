import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { Sections } from './section.entity';

@Entity()
export class Rowitem {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column("text")
    key: string

    @Column("text")
    value: string

    @ManyToOne(() => Sections, section => section.rowitems)
    section: Sections

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
