// routes/userRoutes.ts
import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/UserController';
import { registerUser } from '../controllers/UserController';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/users/register', registerUser);

export default router;
