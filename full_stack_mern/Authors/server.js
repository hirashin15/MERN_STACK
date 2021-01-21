const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config')
require('./server/routes/author.routes')(app)


app.listen(port, () => console.log(`Listening to port ${port}`));