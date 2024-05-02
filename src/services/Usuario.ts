import Usuario, { IUsuario } from "../models/Usuario";

export const getAllUsers = async ()  => {
   const user = await Usuario.find();
   return user;
}

export const getUserById = async (id: string) => {
   const user = Usuario.findById(id);
   return user;
}

export const createUser = async (data: IUsuario) => {
   const user = new Usuario(data);
   user.save();
   return user;
}

export const updateUserById = async (id: string, data: IUsuario) => {
   const user = Usuario.findByIdAndUpdate(id, data, {new: true});
   return user;
}

export const deleteUserById = async (id: string) => {
   const user = Usuario.findByIdAndDelete(id);
   return user;
}
