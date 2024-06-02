const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    // origin: "http://localhost:4000" //production
    origin: "http://localhost:4200" // dev
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const {initialProduct, initial} = require("./app/fuct_Initial");

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Database with { force: true }');
    initial();
    initialProduct();
});
// ^ membuat tabel di database
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/product.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
