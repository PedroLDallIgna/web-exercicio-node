import { Router } from "express";
import { getUsuarios, getUsuarioById } from "../services/Usuario";
import Usuario from "../models/Usuario";

const route = Router()

route.post('/', (req, res) => {
    if (req.body) {
        const usuario = new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            genero: req.body.genero,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            rg: req.body.rg
        })

        usuario.save()
        return res.status(201).send(usuario)
    }
});

export default route;