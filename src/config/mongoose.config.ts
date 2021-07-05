import mongoose from "mongoose";
import colors from "colors"

const URL = 'mongodb://localhost:27017/happyhand'

export const setMongoConnect = () => {

    mongoose.connect(URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
        }, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log(colors.red("Connecté à la base de données"));
            }
        
    })
}