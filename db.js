const mongoose = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
        console.log("DB connected successfully");
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = db;