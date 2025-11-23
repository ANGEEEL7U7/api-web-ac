import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('education')
export class EducationEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  color: string;

  @Column({ name: 'date_start', type: 'date' })
  dateStart: Date;

  @Column({ name: 'date_end', type: 'date', nullable: true })
  dateEnd?: Date;

  @Column({ type: 'varchar', length: 500 })
  name: string;

  @Column({ name: 'image_url', type: 'text' })
  imageUrl: string;

  @Column({ type: 'varchar', length: 255 })
  speciality: string;

  @Column({ name: 'link_education', type: 'text', nullable: true })
  linkEducation: string;
}
