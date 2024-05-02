import { Router } from "express";
import type { Request, Response } from "express";
import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } from "../services/Usuario";
import type { IUsuario } from "../models/Usuario";
import httpStatus from "http-status";

const route = Router()

route.post('/', async (req: Request, res: Response) => {
    if (req.body) {
        const data: IUsuario = {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            genero: req.body.genero,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            rg: req.body.rg
        };
        const user = await createUser(data);

        return res.status(httpStatus.CREATED).send(user);
    }
});

route.get('/', async (req: Request, res: Response) => {
    const users = await getAllUsers();

    return res.status(httpStatus.OK).send(users);
});

route.get('/:id', async (req: Request, res: Response) => {
    try {
        const {id: userId} = req.params;
        const user = await getUserById(userId);
        return res.status(httpStatus.OK).send(user);
    } catch (err) {
        return res.status(httpStatus.NOT_FOUND);
    }
});

route.put('/:id', async (req: Request, res: Response) => {
    try {
        const {id: userId} = req.params;
        const data: IUsuario = {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            genero: req.body.genero,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            rg: req.body.rg
        };
        const user = await updateUserById(userId, data);
        return res.status(httpStatus.OK).send(user);
    } catch (err) {
        return res.status(httpStatus.NOT_FOUND);
    }
});

route.delete('/:id', async (req: Request, res: Response) => {
    try {
        const {id: userId} = req.params;
        const user = await deleteUserById(userId);
        return res.status(httpStatus.NO_CONTENT).send(user);
    } catch (err) {
        return res.status(httpStatus.NOT_FOUND);
    }
});

export default route;
