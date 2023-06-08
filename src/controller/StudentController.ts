import express, { Request, Response } from "express";
import Student from "../entities/Student";
import StudentDetails from "../entities/StudentDetails";

import StudentDetailsRepository from "../utils/StudentDetailsRepository";
import StudentRepository from "../utils/StudentRepository";
import { StudentCourse } from "../entities/StudentCourse";
import StudentCategoryRepository from "../utils/StudentCategoryRepository";
import StudentCourseRepository from "../utils/StudentCourseRepository";
import StudentCategory from "../entities/StudentCategory";
class StudentController {
  static getStudent = async (req: Request, res: Response) => {
    try {
      const getData = await StudentRepository.find({
        relations: {
          sd: true,
        },
      });
      res.status(200).send({ status: "success", data: getData });
    } catch (error) {
      console.log(error);
    }
  };

  static postStudent = async (req: Request, res: Response) => {
    try {
      const { studentName, studentEmail, studentAge, studentRollNu } = req.body;
      //studentcourse start
      const sc = new StudentCourse();
      sc.Course = "React";

      const sc1 = new StudentCourse();
      sc1.Course = "nodejs";

      const sc2 = new StudentCourse();
      sc2.Course = "Typeorm";

      const sc3 = new StudentCourse();
      sc3.Course = "express";
      //studentcourse end

      //studentcategory start
      const scate = new StudentCategory();
      scate.category = "movies";

      const scate1 = new StudentCategory();
      scate1.category = "star";
      //studentcategory end

      //studentdetails start
      const sd = new StudentDetails();
      sd.studentCourse = "BSCIT";
      sd.studentGrade = "A";
      sd.studentPassingYear = new Date();
      //studentdetails end

      //student started
      const stu = new Student();
      stu.studentName = studentName;
      stu.studentEmail = studentEmail;
      stu.studentRollNu = studentRollNu;
      stu.studentAge = studentAge;
      stu.sd = sd; //this way we connect Student and StudentDetails
      stu.studentcourse = [sc, sc1, sc2, sc3]; //this way we connect Student and StudentCourse
      stu.categories = [scate, scate1]; //this way we connect Student and StudentCategory

      await StudentRepository.save(stu); //this way we save our entities
      //student end
      
      res
        .status(200)
        .send({ status: "success", message: "Data saved successfully" });
    } catch (error) {
      console.log(error);
    }
  };
}

export default StudentController;
