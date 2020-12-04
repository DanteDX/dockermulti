const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
connectDB();
app.use(express.json({extended:false}));

app.use('/api/submit',require('./routes/api/submit.js'));
app.use('/api/get',require('./routes/api/get.js'));

app.listen(4000, () => console.log(`Server  is runnig on 4000`));