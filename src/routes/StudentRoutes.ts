import express from 'express'
import StudentController from '../controller/StudentController'
const router=express.Router();
router.get("/get",StudentController.getStudent)
router.post("/insert",StudentController.postStudent)
export default router
