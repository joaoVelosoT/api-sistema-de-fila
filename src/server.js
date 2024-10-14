require('dotenv').config();
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./routers/router');

const db = require('./config/config');
app.use(cors())
app.use(express.json());
app.use('/', router);

app.get('/healthcheck', (req,res) => {
    res.status(200).json({
        msg : "Tudo certo"
    })
})

app.listen(PORT, async () => {
    try {
        await db();
    } catch (error) {
        console.error(error); 
        console.log("Conexão com o banco de dados falhou !")
    }
    console.log("-------------------------------------")
    console.log("Servidor no ar na porta", PORT)
    console.log("-------------------------------------")
});