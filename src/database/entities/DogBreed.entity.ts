import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DogBreed { // Entidade para a criação do db
    @PrimaryGeneratedColumn("uuid")
    Id: string;

    @Column({
        type: "varchar",
        length: 300
    })
    Name: string;

    @Column({
        type: "varchar",
        length: 500
    })
    PictureUrl: string;
}