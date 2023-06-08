import AppDataSource from "../config/DataSource";
import Student from "../entities/Student";

const StudentRepository = AppDataSource.getRepository(Student)

export default StudentRepository

