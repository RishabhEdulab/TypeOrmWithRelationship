import { Entity,Column,PrimaryGeneratedColumn,OneToMany, JoinColumn, ManyToOne } from "typeorm";
import Student from "./Student";
@Entity()
export class StudentCourse{
@PrimaryGeneratedColumn()
id:number
@Column()
Course:string
@ManyToOne(()=>Student,(student)=>student.studentcourse)

student:Student
}