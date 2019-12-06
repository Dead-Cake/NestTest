import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUser1575625866569 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                },
                {
                    name: 'age',
                    type: 'int',
                },
            ],
        }), true);
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('user');

    }

}
