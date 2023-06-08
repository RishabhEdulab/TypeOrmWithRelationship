import { Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn } from "typeorm";
import Student from "./Student";
@Entity()
class StudentDetails {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  studentCourse: string;
  @Column()
  studentPassingYear: Date;
  @Column()
  studentGrade: string;
  @OneToOne(()=>Student,(student)=>student.sd)
  @JoinColumn()
  student: Student;
}
export default StudentDetails