import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
});

// static method  funtion
userSchema.static("findAdminUserFromDB", async function findAdminUserFromDB() {
  const adminUser = await this.find({ role: "admin" });
  return adminUser;
});

userSchema.method("fullName", function fullName() {
  return (
    this.name.firstName + " " + this.name.middleName + " " + this.name.lastName
  );
});

export const User = model<IUser, UserModel>("User", userSchema);

//class -> attach -> method-> direcly call by class
//user = new User
//user.    this is instance method
//User.getAdmin    this is class instance method
