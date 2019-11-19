import Promotion from '../models/Promotion';
import { userInfo } from 'os';

class PromotionController {
  async store(req, res) {
    const { name } = req.body;
    const promotionExists = await Promotion.findOne({ where: { name }, });

    if (promotionExists) {
      return res.status(400).json({ error: 'Já existe uma promoção com este nome' });
    }

    const promotion = await Promotion.create(req.body);

    return res.json(promotion);
  }

  async index(req, res) {
    const promotion = await Promotion.findAll();

    return res.json(promotion);
  }
  
  async show(req, res) {
    const { name } = req.params;

    const promotion = await Promotion.findOne({ where: { name }, });

    if(!promotion) {
      return res.status(400).json({ error: 'Promoção não encontrada' });
    }

    return res.json(promotion);
  }

  async update(req, res) {
    const { id, name } = req.body;

    const promotion = await Promotion.findByPk(id);

    if (promotion.name !== name) {
      const promotionExists = await Promotion.findOne({ where: { name }, });

      if (promotionExists) {
        return res.status(400).json({ error: 'Já existe uma promoção com este nome' });
      }
    }
    
    await promotion.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async delete(req, res) {    
    const promotion = await Promotion.findByPk(req.params.id);

    if(!promotion) {
      return res.status(400).json({ error: 'Promoção não encontrada' });
    }
    await promotion.destroy()

    return res.json();
  }
}

export default new PromotionController();