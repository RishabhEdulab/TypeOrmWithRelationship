import AppDataSource
 from "../config/DataSource";
import { StudentCourse } from "../entities/StudentCourse";
 const StudentCourseRepository = AppDataSource.getRepository(StudentCourse)

 export default StudentCourseRepository