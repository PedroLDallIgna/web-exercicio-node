import User, { IUser } from "../models/user.model";

export const getAllUsers = async ()  => {
   return await User.find();
}

export const getUserById = async (id: string) => {
   return await User.findById(id);
}

export const createUser = async (data: IUser) => {
   const user = new User(data);
   return await user.save();
}

export const updateUserById = async (id: string, data: IUser) => {
   return await User.findByIdAndUpdate(id, data, { new: true });
}

export const deleteUserById = async (id: string) => {
   return await User.findByIdAndDelete(id);
}
