const mongoose = require("mongoose");
require("dotenv/config")
async function Connection () {
    try{
        mongoose.connect(process.env.CONNECTION_STRING, {
            useNewurlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected!!")
    } catch {
        console.log("error")
    }
}

module.exports = {
    Connection
}