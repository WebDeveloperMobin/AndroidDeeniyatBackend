const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const registerSchema = mongoose.Schema({
    jamaatNumber: {
        type: Number,
        required: true
    },
    Area: {
        type: String
    },
    ameerOfJamaat: {
        type: String
    },
    password: {
        type: String
    },
});

// registerSchema.pre("save", async (next) => {
//     const salt  = bcrypt.genSalt(10)
//         this.password = bcrypt.hash(this.password, salt);
//         next();
// })

module.exports= mongoose.model('Register', registerSchema);