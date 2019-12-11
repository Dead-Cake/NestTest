import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableTenant1576061453595 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'tenant',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'first_name',
                    type: 'varchar',
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                },
                {
                    name: 'city_id',
                    type: 'int',
                },
            ],
        }), true);

        await queryRunner.createForeignKey('tenant', new TableForeignKey({
            columnNames: ['city_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'city',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('tenant');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('city_id') !== -1);
        await queryRunner.dropForeignKey('tenant', foreignKey);
        await queryRunner.dropTable('tenant');
    }
}
