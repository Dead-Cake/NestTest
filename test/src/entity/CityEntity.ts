import { BeforeInsert, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;
}
