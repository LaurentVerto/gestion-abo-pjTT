const express = require('express')
const app = express()
const port = 3030

const dbConnect = require('./DB.js') 
const contratsRoutes = require('./routes/ContratsRoutes.js')  
const modeDePaiementRoutes = require('./routes/ModeDePaiementRoutes.js')  

app.use(express.json());

app.use(express.urlencoded({ extended: true}))

app.use("/contrats", contratsRoutes);

app.use("/modeDePaiement", modeDePaiementRoutes);



app.listen(port, () => console.log(`💻 Example app listening on port ${port}! 💻`))