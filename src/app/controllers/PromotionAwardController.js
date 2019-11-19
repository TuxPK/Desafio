import PromotionAward from '../models/PromotionAward';

class PromotionAwardController {
  async store(req, res) {
    const promotionAward = await PromotionAward.create(req.body);

    return res.json(promotionAward);
  }

  async index(req, res) {
    const promotionAward = await PromotionAward.findAll();

    return res.json(promotionAward);
  }
  
  async show(req, res) {
    const { idPromotion, idAward } = req.params;

    console.log(req.params);

    const promotionAward = await PromotionAward.findOne({ where: { idPromotion, idAward }, });

    if(!promotionAward) {
      return res.status(400).json({ error: 'Vinculo entre promoção e prêmio não encontrada' });
    }

    return res.json(promotionAward);
  }

  async update(req, res) {
    const { id, idPromotion, idAward } = req.body;

    const promotionAward = await PromotionAward.findByPk(id);

    if(!promotionAward) {
      return res.status(400).json({ error: 'Vinculo entre promoção e prêmio não encontrada' });
    }

    await promotionAward.update(req.body);

    return res.json({
      id,
      idPromotion, 
      idAward,
    });
  }

  async delete(req, res) {    
    const promotionAward = await PromotionAward.findByPk(req.params.id);

    if(!promotionAward) {
      return res.status(400).json({ error: 'Vinculo entre promoção e prêmio não encontrada' });
    }
    await promotionAward.destroy()

    return res.json();
  }
}

export default new PromotionAwardController();