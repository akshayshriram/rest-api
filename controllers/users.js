import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {

    const user = req.body;

    users.push({...user, id: uuidv4() });

    res.send(`User with name: ${user.name} added to the databse`)

}

export const getUsers = (req, res) => {
    console.log(users);

    res.send(users);
}

export const getUser = (req, res) => {

    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id); // Use find to get the specific user


    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`user with id ${id} is deleted from database...`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, lastname, age } = req.body;

    // Find the user with the matching ID
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).send(`User with id ${id} not found.`);
    }

    // Update the user with the new fields using the spread operator
    const updatedUser = {...user, ...(name && { name }), ...(lastname && { lastname }), ...(age && { age }) };

    // Replace the old user data with the updated one in the array
    const index = users.findIndex((user) => user.id === id);
    users[index] = updatedUser;

    res.send(`User with id ${id} has been updated.`);
}