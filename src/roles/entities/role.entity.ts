import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
   @PrimaryGeneratedColumn('uuid')
   id: string;
   
   @Column('text')
   name: string;

//    @OneToMany(() => User, user => user.role)
//    user: User[]
}
