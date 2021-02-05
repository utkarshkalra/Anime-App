const express=require('express');
const app=express();

const connectDB=require('./database/mongodb.js');

connectDB();
app.use(express.json({extended:false}))
app.use('/anime',require('./api/anime'))
const PORT=process.env.PORT || 5500;

app.get('/',(req,res)=>{
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

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);

})