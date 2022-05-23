const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dog')
const adminRoutes = require('./routes/admin')

app.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('sorry not an adimin!')
})

app.use('/shelters', shelterRoutes);
app.use('/admin', adminRoutes)
app.use('/dogs', dogRoutes);

app.listen(3000, () => {
    console.log("port on 3000!!")
})