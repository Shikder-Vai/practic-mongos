import { NextFunction, Request, Response } from "express";
import {
  createUserForDB,
  getAdminUser,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserForDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
  next();
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
  next();
};
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  res.status(200).send({
    status: "success",
    data: user,
  });
  next();
};

export const getAdminUserFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminUser();
  res.status(200).json({
    status: "success",
    data: user,
  });
  next();
};

// export const getUserById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { id } = req.params;
//   const user = await getUserByIdFromDB(id);
//   res.status(200).json({
//     status: "success",
//     data: user,
//   });
//   next();
// };
