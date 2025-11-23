import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeTechnologieEntity } from './type-technologie.entity';
import { CompanyEntity } from './company.entity';

@Entity('skills')
export class SkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  periods: string;

  @ManyToOne(() => TypeTechnologieEntity, (type) => type.skills)
  @JoinColumn({ name: 'type_technologie' })
  typeTechnologie: TypeTechnologieEntity;

  @Column({ type: 'boolean', default: true, nullable: true })
  status: boolean;

  @ManyToMany(() => CompanyEntity, (company) => company.technologiesSkill)
  companies: CompanyEntity[];
}
