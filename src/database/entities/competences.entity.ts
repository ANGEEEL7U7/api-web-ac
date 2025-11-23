import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('competences')
export class CompetenceEntity {
  @PrimaryGeneratedColumn({
    type: 'integer',
  })
  id: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  name: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;
}
