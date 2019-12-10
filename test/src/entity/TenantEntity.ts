import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToOne } from 'typeorm';
import {CityEntity} from './CityEntity';

@Entity('tenant')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(type => CityEntity)
  cityId: CityEntity;
}
