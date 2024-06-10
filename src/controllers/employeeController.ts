import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import employeeModel from '../models/employeeModel';

// --------------------------------------------------------------

// POST
// Create Employee
export const createEmployee = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { name, email, mobile, dob } = req.body;
      if (!name || !email || !mobile || !dob) {
        res.status(400);
        throw new Error('Please fill all fields');
      }

      const emailExists = await employeeModel.findOne({
        email: email.toLowerCase(),
      });
      if (emailExists) {
        res.status(400);
        throw new Error('Email already exists');
      }

      const employee = await employeeModel.create({
        name,
        email: email.toLowerCase(),
        mobile,
        dob,
      });
      res.status(201).json({ messaqge: 'Employee Created', data: employee });
    } catch (error: any) {
      res.status(400);
      throw new Error(error.message);
    }
  }
);

// GET
// All Employees
export const getEmployees = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const employees = await employeeModel.find();
      if (employees.length == 0) {
        res.status(404);
        throw new Error('Employees not found');
      }
      res.status(200).json({ data: employees });
    } catch (error: any) {
      res.status(400);
      throw new Error(error.message);
    }
  }
);

// GET
// One Employee
export const getEmployee = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const employee = await employeeModel.findById(id);
      if (!employee) {
        res.status(404);
        throw new Error('Employee not found');
      }
      res.status(200).json({ data: employee });
    } catch (error: any) {
      res.status(400);
      throw new Error(error.message);
    }
  }
);

// PUT
// Update Employee
export const updateEmployee = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const employee = await employeeModel.findById(id);
      if (!employee) {
        res.status(404);
        throw new Error('Employee not found');
      }

      const updatedEmployee = await employeeModel.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );

      res
        .status(200)
        .json({ message: 'Employee Updated', data: updatedEmployee });
    } catch (error: any) {
      res.status(400);
      throw new Error(error.message);
    }
  }
);

// DELETE
// Delete Employee
export const deleteEmployee = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const employee = await employeeModel.findByIdAndDelete({ _id: id });
      if (!employee) {
        res.status(404);
        throw new Error('Employee not found');
      }
      res.status(200).json({ message: 'Employee Deleted' });
    } catch (error: any) {
      res.status(400);
      throw new Error(error.message);
    }
  }
);
