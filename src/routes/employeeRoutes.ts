import express from 'express';
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from '../controllers/employeeController';
const router = express.Router();

// --------------------------------------------------------------

router.post('/employee', createEmployee);
router.get('/employee', getEmployees);
router.get('/employee/:id', getEmployee);
router.put('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);

export default router;
