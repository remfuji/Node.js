const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const registeredUsers = [];
const loggedInUsers = [];


app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const newUser = { username, password };
    registeredUsers.push(newUser);
    res.status(201).json({ message: 'Utente registrato con successo' });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = registeredUsers.find(user => user.username === username && user.password === password);
    if (user) {
        loggedInUsers.push(user);
        res.status(200).json({ message: 'Accesso effettuato con successo' });
    } else {
        res.status(401).json({ message: 'Credenziali non valide' });
    }
});


app.post('/logout', (req, res) => {
    const { username } = req.body;
    const index = loggedInUsers.findIndex(user => user.username === username);
    if (index !== -1) {
        loggedInUsers.splice(index, 1);
        res.status(200).json({ message: 'Utente disconnesso' });
    } else {
        res.status(404).json({ message: 'Utente non trovato nei loggati' });
    }
});


app.get('/users', (req, res) => {
    res.status(200).json(registeredUsers);
});


app.get('/userCount', (req, res) => {
    res.status(200).json({ count: registeredUsers.length });
});


app.post('/checkLogin', (req, res) => {
    const { username } = req.body;
    const isLoggedIn = loggedInUsers.some(user => user.username === username);
    res.status(200).json({ isLoggedIn });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server in esecuzione sulla porta ${PORT}`);
});
