const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
async function connectDatabase(){
    const connect = await mongoose.connect(`mongodb+srv://pushpendra:pushpa70000@cluster0.2tvgl.mongodb.net/`)
    return connect
}

module.exports = connectDatabase

// mongodb+srv://pushpendra:<password>@cluster0.7rgay.mongodb.net/?retryWrites=true&w=majority
// mongo username-pushpendra
// mongo password- pushpa70000 