import { Router } from "express";
import type { Request, Response } from "express";
import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } from "../services/users.services";
import type { IUser } from "../models/user.model";
import httpStatus from "http-status";

const route = Router();

route.post('/', async (req: Request, res: Response) => {
    try {
        if (req.body) {
            const data: IUser = {
                nome: req.body.nome,
                email: req.body.email,
                idade: req.body.idade,
                genero: req.body.genero,
                telefone: req.body.telefone,
                cpf: req.body.cpf,
                rg: req.body.rg
            };
            const user = await createUser(data);
    
            return res.status(httpStatus.CREATED).json(user);
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
});

route.get('/', async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        return res.status(httpStatus.OK).json(users);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
});

route.get('/:id', async (req: Request, res: Response) => {
    try {
        const {id: userId} = req.params;
        const user = await getUserById(userId);
        return res.status(httpStatus.OK).send(user);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
});

route.put('/:id', async (req: Request, res: Response) => {
    try {
        const {id: userId} = req.params;
        const data: IUser = {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            genero: req.body.genero,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            rg: req.body.rg
        };
        const user = await updateUserById(userId, data);
        return res.status(httpStatus.OK).json(user);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
});

route.delete('/:id', async (req: Request, res: Response) => {
    try {
        const {id: userId} = req.params;
        const user = await deleteUserById(userId);
        return res.status(httpStatus.OK).json(user);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
});

export default route;
