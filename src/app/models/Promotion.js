import Sequelize, { Model } from 'sequelize';

class Promotion extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
    },
    {
      sequelize,
    });

    return this;
  }
}

export default Promotion;