import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('person_post')
export class PersonPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    cedula: string;

    @Column({ default: '' })
    nombre: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    creado: Date;
}