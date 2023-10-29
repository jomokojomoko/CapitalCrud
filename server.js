//import statements
const express = require("express");
const cors = require("cors");

//initialize variables
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// add cors to server
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./server/routes/employeeRoutes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});