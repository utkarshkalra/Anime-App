const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

const connectDB = require('./database/mongodb.js');

//enabling access from anywhere!!
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());


connectDB();

app.use(express.json({ extended: false }))

app.use('/animes', require('./api/anime'))

const PORT = process.env.PORT || 5555;

app.get('/', (req, res) => {
    res.send("hola!");
})


// app.get('/api',(req,res)=>{
//     // database.find({},(err , data)=>{
//     //     if(err){
//     //         res.end();
//     //         return;
//     //     }
//     //     res.json(data);
//     // })
//     res.send("sexifull")
// })

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);

})