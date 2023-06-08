import AppDataSource from "../config/DataSource";
import StudentDetails from '../entities/StudentDetails';

const StudentDetailsRepository = AppDataSource.getRepository(StudentDetails)

export default StudentDetailsRepository

