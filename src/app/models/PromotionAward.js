import Sequelize, { Model } from 'sequelize';

class PromotionAward extends Model {
  static init(sequelize) {
    super.init({
      idPromotion: Sequelize.INTEGER,
      idAward: Sequelize.INTEGER,
    },
    {
      sequelize,
    });

    return this;
  }
}

export default PromotionAward;