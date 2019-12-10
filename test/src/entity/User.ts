import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    hashPassword() {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    @Column()
    age: number;
}
