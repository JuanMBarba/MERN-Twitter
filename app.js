const mongoose = require('mongoose')
const express = require("express");
const db = require('./config/keys').mongoURI
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
const User = require("./models/User")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const user = new User({
        handle: "jim",
        email: "jim@jim.jim",
        password: "jimisgreat123"
    })
    user.save()
    res.send("Hello World Again")
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/api/users", users);
app.use("/api/tweets", tweets);

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));