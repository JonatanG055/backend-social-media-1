import { Request, Response } from 'express';
import User from '../models/User';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find(); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios", error });
    }
};


export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.params.id); 
        if (!user) {
            res.status(404).json({ message: "Usuario no encontrado" });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, nick, password, role, image } = req.body;

        
        if (!name || !nick || !password) {
            res.status(400).json({ message: "Todos los campos son obligatorios" });
            return;
        }

        
        const existingUser = await User.findOne({ nick });
        if (existingUser) {
            res.status(400).json({ message: "El nombre de usuario ya está en uso" });
            return;
        }

        
        const user = new User({ name, nick, password, role, image });
        await user.save();

        res.status(201).json({ message: "Usuario creado exitosamente", user });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario", error });
    }
};


export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, nick, password, role, image } = req.body;

        
        const user = await User.findByIdAndUpdate(id, { name, nick, password, role, image }, { new: true });
        if (!user) {
            res.status(404).json({ message: "Usuario no encontrado" });
            return;
        }

        res.json({ message: "Usuario actualizado exitosamente", user });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario", error });
    }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id); 
        if (!user) {
            res.status(404).json({ message: "Usuario no encontrado" });
            return;
        }

        res.json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario", error });
    }
};


export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, nick, password, role, image } = req.body;

        if (!name || !nick || !password) {
            res.status(400).json({ message: "Todos los campos son obligatorios" });
            return;
        }

        const existingUser = await User.findOne({ nick });
        if (existingUser) {
            res.status(400).json({ message: "El nombre de usuario ya está en uso" });
            return;
        }

        const user = new User({ name, nick, password, role, image });
        await user.save();

        res.status(201).json({ message: "Usuario registrado exitosamente", user });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario", error });
    }
};

