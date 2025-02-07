import { MigrationInterface, QueryRunner } from "typeorm";

export class dogBreed1608299589665 implements MigrationInterface {
    name = 'dogBreed1608299589665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "Name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dog_breed"`);
    }

}
