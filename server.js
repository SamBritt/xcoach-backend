const express = require('express')
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const workoutDetailsRoutes = require('./routes/workoutDetailsRoutes');

const app = express()
const port = 8080

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', userRoutes);
app.use('/api', workoutRoutes);
app.use('/api', workoutDetailsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})