const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_test', 'root', '2660882', {
  host: 'localhost',
  dialect: 'mariadb'
});

const User = sequelize.define(
  'user',
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    // options
  }
);

sequelize.sync();

module.exports = User;
