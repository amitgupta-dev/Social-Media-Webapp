const mongoose = require("mongoose")

const connection = (url, PORT, app) => {
    mongoose
        .connect(url, { dbName: "Social_Media" })
        .then(() => {
            console.log("db conncected...")
            app.listen(PORT, () => {
                console.log("server listening on PORT " + PORT)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connection