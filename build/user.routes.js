import express from 'express';
import fs from 'fs';
const userRoute = express.Router();
// get all users
userRoute.get('/', (req, res) => {
    const users = fs.readFile('./MOCK_DATA.json', "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: "couldn't read file",
                success: false
            });
            return;
        }
        const ParsedUsers = JSON.parse(data);
        res.status(200).json({
            users: ParsedUsers,
            success: true,
        });
    });
});
// get singleUser
userRoute.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({
                message: "failed to read file",
                success: false
            });
            return;
        }
        const parseUsers = JSON.parse(data);
        const user = parseUsers.find((user) => user.id === id);
        if (user) {
            res.status(200).json({
                user: user,
                success: true
            });
            console.log(user);
        }
        else {
            res.status(203).json({
                message: `couldn't find user with id ${id}`,
                success: false
            });
        }
    });
});
// post new user
userRoute.post('/', (req, res) => {
    const { first_name, last_name, email, gender } = req.body;
    fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({
                message: "failed to read file",
                success: false
            });
            return;
        }
        const parseUsers = JSON.parse(data);
        // console.log(parseUsers.length)
        const newUser = {
            id: parseUsers.length + 1,
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender
        };
        parseUsers.push(newUser);
        const newUserStringifed = JSON.stringify(parseUsers);
        fs.writeFile('./MOCK_DATA.json', newUserStringifed, (err) => {
            if (err) {
                res.status(500).json({
                    message: "failed to read file",
                    success: false
                });
                return;
            }
            res.status(200).json({
                user: newUser,
                success: true
            });
            console.log(newUser);
        });
    });
});
// update user detail using id
userRoute.patch('/:id', (req, res) => {
    const updatedData = req.body;
    // console.log(updatedData)
    const id = parseInt(req.params.id);
    fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({
                message: "failed to read file",
                success: false
            });
            return;
        }
        const parseUsers = JSON.parse(data);
        // console.log(parseUsers)
        const userINdex = parseUsers.findIndex((user) => user.id === id);
        console.log(userINdex);
        if (userINdex == -1) {
            res.status(401).json({
                message: `couldn't find user with id ${id}`,
                success: false
            });
            return;
        }
        parseUsers[userINdex] = { ...parseUsers[userINdex], ...updatedData };
        // console.log(parseUsers);
        // console.log(parseUsers[userINdex] = { ...parseUsers[userINdex], ...updatedData });
        const stringifyUpdate = JSON.stringify(parseUsers);
        fs.writeFile('./MOCK_DATA.json', stringifyUpdate, (err) => {
            if (err) {
                res.status(500).json({
                    message: "failed to write file",
                    success: false
                });
                return;
            }
            res.status(200).json({
                user: updatedData,
                success: true
            });
            console.log(updatedData);
        });
    });
});
// delete user detail using id
userRoute.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('./MOCK_DATA.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({
                message: "failed to read file",
                success: false
            });
            return;
        }
        const parseData = JSON.parse(data);
        const index = parseData.findIndex((user) => user.id === id);
        if (index == -1) {
            res.status(401).json({
                message: `couldn't find user with id ${id}`,
                success: false
            });
            return;
        }
        const deletedUser = parseData.splice(index, 1);
        const stringifedData = JSON.stringify(parseData);
        fs.writeFile('./MOCK_DATA.json', stringifedData, (err) => {
            if (err) {
                res.status(500).json({
                    message: "failed to write file",
                    success: false
                });
                return;
            }
            res.status(200).json({
                deletedUser: deletedUser,
                success: true
            });
            console.log(deletedUser);
        });
    });
});
export default userRoute;
