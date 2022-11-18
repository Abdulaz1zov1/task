const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://task:123@cluster0.to8ljqo.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(()=>{
        console.log(`MongoDB Connected`)
    }).catch((err)=>{
        console.log("err")
    })
}

module.exports = connectDB