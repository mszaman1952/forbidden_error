

require('dotenv').config();
const app = require('./app')
const port = process.env.PORT || 3000;
const hostName = '127.0.0.1';


app.listen(port, hostName, () => {
    console.log(`Server is Running Successfully at http://${hostName}:${port}`);
});














