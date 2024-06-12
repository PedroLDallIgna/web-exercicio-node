import Usuario from "../models/Usuario";

export const getUsuarios = async ()  => {
   const usuario = await Usuario.find()
   return usuario
}

export const getUsuarioById = async (id:string) => {
   const usuario = Usuario.findById(id)
   return usuario
}