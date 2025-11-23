import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SkillEntity } from './skill.entity';
import { CompanyActivitiesEntity } from './company-activity.entity';

@Entity('companies')
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'image_url', type: 'text' })
  imageUrl: string;

  @Column({
    type: 'varchar',
    length: 255,
    default: 'Desarrollador de software',
  })
  position: string;

  @Column({ name: 'date_start', type: 'date' })
  dateStart: string;

  @Column({ name: 'date_end', type: 'date', nullable: true })
  dateEnd: string;

  @ManyToMany(() => SkillEntity, (skill) => skill.companies)
  @JoinTable({
    name: 'company_technologies',
    joinColumn: { name: 'company' },
    inverseJoinColumn: { name: 'technologie_skill' },
  })
  technologiesSkill: SkillEntity[];

  @OneToMany(
    () => CompanyActivitiesEntity,
    (activities) => activities.companyFk,
  )
  activities: CompanyActivitiesEntity[];
}
