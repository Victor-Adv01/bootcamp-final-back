import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Comment {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    content: string;
    
    // una vez seteado puede ser opcion:
    // @ManyToOne(() => Review, review => review.comments)
    // review: Review;

    //faltaria users N a 1
}
