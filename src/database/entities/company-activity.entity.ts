import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity('company_activity')
export class CompanyActivitiesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'company', type: 'integer', nullable: false })
  company: number;

  @Column({ name: 'des_activity', type: 'text' })
  description: string;

  @ManyToOne(() => CompanyEntity, (company) => company.activities)
  @JoinColumn({ name: 'company' })
  companyFk: CompanyEntity;
}
