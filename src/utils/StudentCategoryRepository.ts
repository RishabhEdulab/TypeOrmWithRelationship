import StudentCategory from "../entities/StudentCategory";
import AppDataSource from "../config/DataSource";

const StudentCategoryRepository =AppDataSource.getRepository(StudentCategory)

export default StudentCategoryRepository