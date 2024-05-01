import { Schema, model } from "mongoose";

interface IUsuario {
   nome: String,
   email: String,
   idade: Number,
   genero: String,
   telefone: String,
   cpf: String,
   rg: Number
}

const UsuarioSchema = new Schema<IUsuario>({
   nome: {type: String, require: true},
   email: {type: String, require: true},
   idade: {type: Number, require: true},
   genero: {type: String, require: true},
   telefone: {type: String, require: true},
   cpf: {type: String, require: true},
   rg: {type: Number, require: true}
})

const Usuario = model<IUsuario>('Usuario', UsuarioSchema)

export default Usuario