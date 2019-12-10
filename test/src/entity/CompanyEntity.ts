import { BeforeInsert, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;
}
