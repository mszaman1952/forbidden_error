


// const express = require("express");
// // const bodyParser = require("body-parser");
// const router = require("./routes/users.routes");
// // const { urlencoded } = require("body-parser");
// const app = express();

// app.use(express.static('views'))
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(express.json());
// app.use(urlencoded({extended: true}))

// app.use(router)

// app.get("/", (req, res) => {
//   res.send("This is Home Route");
// });

// app.use((req, res, next) => {
//     res.status(404).json({
//         message: "Resource Not Found"
//     });
// });

// module.exports = app;


const express = require("express");
const cors = require('cors');
const router = require("./routes/users.routes");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(router);

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Resource Not Found",
  });
});

module.exports = app;
