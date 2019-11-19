import Sequelize from 'sequelize';

import Promotion from '../app/models/Promotion';
//import Award from '../app/models/Award';
//import PromotionAward from '../app/models/PromotionAward';
// Award, PromotionAward
import databaseConfig from '../config/database';

const models = [Promotion];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
