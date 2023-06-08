import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne, ManyToOne, OneToMany, ManyToMany,JoinTable } from "typeorm";
import StudentDetails from "./StudentDetails";
import { StudentCourse } from "./StudentCourse";
import StudentCategory from "./StudentCategory";
@Entity()
class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    default: "null",
    length: 100,
  })
  studentName: string;

  @Column({
    nullable: true,
    default: "null",
    length: 100,
  })
  studentEmail: string;
  @Column({
    nullable: true,
  })
  studentAge: number;
  @Column({
    nullable: true,
  })
  studentRollNu: number;

  @CreateDateColumn()
  isCreated:Date;

  @UpdateDateColumn()
  isUpdated:Date;

  @OneToOne(()=>StudentDetails,(StudentDetail)=>StudentDetail.student,
  {
    cascade: true
  })
  sd: StudentDetails;

  @OneToMany(()=>StudentCourse,(studentCousrse)=>studentCousrse.student,{
    cascade: true
  })
  studentcourse:StudentCourse[]

  @ManyToMany(()=>StudentCategory,(studentcategory)=>studentcategory.student,{
    cascade: true
  })
  @JoinTable({
    name:"bothStudentCategoryTbl"
  })
  categories:StudentCategory[]
}

export default Student