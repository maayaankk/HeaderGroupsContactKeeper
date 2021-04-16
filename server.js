const express = require('express');
const connectDB = require('./config/db')
const path = require('path')
const PORT = process.env.PORT || 8000;

const app = express();

connectDB();

// Init middkeware

app.use(express.json({ extended: false }));

//Defining our routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}



app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))