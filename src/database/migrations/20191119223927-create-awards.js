module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Awards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
    
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Awards');
  }
};
