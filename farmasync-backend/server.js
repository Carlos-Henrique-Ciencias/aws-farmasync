require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const http = require('http');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const appointmentRoutes = require('./src/routes/appointmentRoutes');
const patientRoutes = require('./src/routes/patientRoutes');
const pharmacistRoutes = require('./src/routes/pharmacistRoutes');
const { WebSocketServer } = require('ws');

// Configuração da conexão MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Configuração do Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Configuração do Express
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(cors()); // Adicione o middleware cors aqui
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/patients', patientRoutes);
app.use('/pharmacists', pharmacistRoutes);

// Configuração do WebSocket
wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
  });
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Inicialização do servidor
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
