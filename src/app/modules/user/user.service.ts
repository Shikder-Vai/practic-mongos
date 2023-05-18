import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserForDB = async (payload: IUser): Promise<IUser> => {
  const newUser = await new User(payload); //in build instance method
  //custom build instance method.
  console.log(await newUser.fullName());
  await newUser.save();
  return newUser;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

// this is for member all details
/*
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload });
  return user;
};
*/

//this is for spacific data
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, email: 1, contactNo: 1, dateOfBirth: 1 }
  );
  return user;
};

//static method serviec
export const getAdminUser = async () => {
  const admins = await User.findAdminUserFromDB();
  return admins;
};
