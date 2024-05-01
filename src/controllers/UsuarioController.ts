import { Router } from "express";
import { getAllUsuarios, getUsuarioById } from "../services/Usuario";
import Usuario from "../models/Usuario";

const route = Router()

route.post('/', (req, res) => {
    if (req) {
        const usuario = new Usuario({
            
        })

        usuario.save()
        return res.status(201).send(usuario)
    }
});

export default route;