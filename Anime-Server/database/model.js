const mongoose=require('mongoose');

const animeSchema=new mongoose.Schema({
    animeName:{
        type:String
    },
    animeDescription:{
        type:String
    },
    animePhoto:{
        type:String
    }
})

module.exports= Anime=mongoose.model('anime',animeSchema);
