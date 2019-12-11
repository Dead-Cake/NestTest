import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableCompanyCity1576065271411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'companyCity',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'city_id',
                    type: 'int',
                },
                {
                  name: 'company_id',
                  type: 'int',
                },
            ],
        }), true);

        await queryRunner.createForeignKey('companyCity', new TableForeignKey({
            columnNames: ['city_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'city',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('companyCity', new TableForeignKey({
            columnNames: ['company_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'company',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('companyCity');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('city_id') !== -1);
        await queryRunner.dropForeignKey('companyCity', foreignKey);
        const foreignKey2 = table.foreignKeys.find(fk => fk.columnNames.indexOf('company_id') !== -1);
        await queryRunner.dropForeignKey('companyCity', foreignKey2);
        await queryRunner.dropTable('companyCity');
    }

}
