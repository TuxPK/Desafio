import Sequelize, { Model } from 'sequelize';

class Award extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
    },
    {
      sequelize,
    });

    return this;
  }
}

export default Award;