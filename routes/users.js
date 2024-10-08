import express from 'express';


import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router();



// Define your user routes here
router.get('/', getUsers);


router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser);


export default router;