import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firsName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  email?: string;
  gender: "Male" | "Female";
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  parmanentAddress: string;
}
//static method interface
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  findAdminUserFromDB(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

//custom method interface
export interface IUserMethods {
  fullName(): string;
}
