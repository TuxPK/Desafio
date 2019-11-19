module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PromotionAwards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      idPromotion: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Promotions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      idAward: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Awards', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
    
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('PromotionAwards');
  }
};
