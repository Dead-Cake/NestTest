import { BeforeInsert, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {CompanyEntity} from './CompanyEntity';
import {TenantEntity} from './TenantEntity';

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @ManyToMany(type => CompanyEntity, company => company.cityId)
  companyId: CompanyEntity[];

  @OneToMany(type => TenantEntity, tenant => tenant.cityId)
  tenantId: TenantEntity[];

}
