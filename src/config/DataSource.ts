import { DataSource } from "typeorm";
import dotenv from 'dotenv'
import Student from "../entities/Student";
import StudentDetails from "../entities/StudentDetails";
import { StudentCourse } from "../entities/StudentCourse";
import StudentCategory from "../entities/StudentCategory";
dotenv.config()
const host = process.env.LOCALHOST;
console.log("shsj",host);

if (!host) throw new Error(`host is not define ${host}`);

const port = process.env.MYSQL_PORT;

if (!port) throw new Error(`port is not define ${port}`);
const username = process.env.USER_NAME;
if (!username) throw new Error(`username not define ${username}`);
const password = process.env.PASSWORD;
if (!password) throw new Error(`password not define ${password}`);
const database = process.env.DATABASE;
if (!database) throw new Error(`database not define ${database}`);

const AppDataSource = new DataSource({
  type: "mysql",
  host: host,
  port: Number(port),
  username: username,
  password: password,
  database: database,
  synchronize: true,
  logging: false,
  entities: [Student,StudentDetails,StudentCourse,StudentCategory],
});

export default AppDataSource;
