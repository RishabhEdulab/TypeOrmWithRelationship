import { Column,Entity,PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import Student from "./Student";
@Entity()
 class StudentCategory{
    @PrimaryGeneratedColumn()
    id:number
    @Column({
        nullable:true
    })
    category:string

    @ManyToMany(()=>Student,(student)=>student.categories)
    student:Student
}
export default StudentCategory