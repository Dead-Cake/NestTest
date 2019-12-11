import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableTenantCompany1576066120436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'tenantCompany',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'tenant_id',
                    type: 'int',
                },
                {
                    name: 'company_id',
                    type: 'int',
                },
            ],
        }), true);

        await queryRunner.createForeignKey('tenantCompany', new TableForeignKey({
            columnNames: ['tenant_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tenant',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('tenantCompany', new TableForeignKey({
            columnNames: ['company_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'company',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('tenantCompany');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('tenant_id') !== -1);
        await queryRunner.dropForeignKey('tenantCompany', foreignKey);
        const foreignKey2 = table.foreignKeys.find(fk => fk.columnNames.indexOf('company_id') !== -1);
        await queryRunner.dropForeignKey('tenantCompany', foreignKey2);
        await queryRunner.dropTable('tenantCompany');
    }

}
