const express = require('express');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const timeRoutes = require('./routes/time');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/time', timeRoutes);

app.listen(3000, () => console.log('Server running...'));
