import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SkillEntity } from './skill.entity';

@Entity('type_technologie')
export class TypeTechnologieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @OneToMany(() => SkillEntity, (skill) => skill.typeTechnologie)
  skills: SkillEntity[];
}
