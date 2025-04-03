const mongoose = require('mongoose');

const dbConnect = mongoose.connect('mongodb://localhost:27017/SplitPay', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});  

dbConnect
    .then(() => console.log("🆗 Connexion base de données OK 🆗")
    )
    .catch(err => console.error("❌ Erreur de connexion à la base de données : ", err , "❌" ))