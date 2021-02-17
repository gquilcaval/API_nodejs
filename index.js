const app = require('./server')
const sequelize = require('./db');
// PUERTO
const PORT = process.env.PORT || 3050
//ROUTES
require("./src/routes/routes")(app);

app.listen(PORT,function(){
    console.log('server running')

  
    sequelize.sync({force: false}).then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});