import { BeforeInsert, Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {CityEntity} from './CityEntity';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @ManyToMany(type => CityEntity, city => city.companyId)
  cityId: CityEntity[];
}
