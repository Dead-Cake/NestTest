import {MigrationInterface, QueryRunner} from 'typeorm';

export class AddColumns1575634939583 implements MigrationInterface {
    name = 'AddColumns1575634939583';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`, undefined);
        await queryRunner.query(`CREATE SEQUENCE "user_id_seq" OWNED BY "user"."id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq')`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`, undefined);
        await queryRunner.query(`DROP SEQUENCE "user_id_seq"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`, undefined);
    }

}
