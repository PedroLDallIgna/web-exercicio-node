import { Schema, ValidateFn, model } from "mongoose";
import { validateCpf, validateEmail, validatePhone } from "../utils/validations";

interface IUsuario {
   nome: string;
   email: string;
   idade: number;
   genero: string;
   telefone: string;
   cpf: string;
   rg: number;
}

const UsuarioSchema = new Schema<IUsuario>({
   nome: {
      type: String, 
      require: true
   },
   email: {
      type: String, 
      require: true,
      validate: {
         validator: validateEmail as ValidateFn<String>,
         message: ({value}) => `${value} is not a valid Email.`
      }
   },
   idade: {
      type: Number, 
      require: true
   },
   genero: {
      type: String, 
      require: true
   },
   telefone: {
      type: String, 
      require: true,
      validate: {
         validator: validatePhone as ValidateFn<String>,
         message: ({value}) => `${value} is not a valid Telefone. Must be like '(00) 0000-0000' or '(00) 00000-0000'.`
      }
   },
   cpf: {
      type: String, 
      require: true,
      validate: {
         validator: validateCpf as ValidateFn<String>,
         message: ({value}) => `${value} is not a valid CPF. Must be like '000.000.000-00'.`
      }
   },
   rg: {
      type: Number,
      require: true
   }
})

const Usuario = model<IUsuario>('Usuario', UsuarioSchema)

export default Usuario
