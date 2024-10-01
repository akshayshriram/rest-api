import express from 'express';

const router = express.Router();

const users = [
    {
        name: "Akshay",
        lastName: "Shriram",
        age: 25
    }
]

// Define your user routes here
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

export default router;