import mongoose, { Schema } from 'mongoose';

const employeeSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const employeeModel = mongoose.model('Employee', employeeSchema);
export default employeeModel;
