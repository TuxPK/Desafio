import Award from '../models/Award';

class AwardController {
  async store(req, res) {
    const { title, quantity } = req.body;

    if(!quantity) {
      return res.status(400).json({ error: 'A quantidade informada deve ser informada' });
    }

    if(!title) {
      return res.status(400).json({ error: 'O título deve ser informado' });
    }

    const awardExists = await Award.findOne({ where: { title }, });

    if (awardExists) {
      return res.status(400).json({ error: 'Já existe um prêmio com este título' });
    }

    const award = await Award.create(req.body);

    return res.json(award);
  }

  async index(req, res) {
    const award = await Award.findAll();

    return res.json(award);
  }
  
  async show(req, res) {
    const award = await Award.findByPk(req.params.id);

    if(!award) {
      return res.status(400).json({ error: 'Prêmio não encontrado' });
    }

    return res.json(award);
  }

  async update(req, res) {
    const { id, title, quantity } = req.body;

    const award = await Award.findByPk(id);

    if (award.title !== title) {
      const awardExists = await Award.findOne({ where: { title }, });

      if (awardExists) {
        return res.status(400).json({ error: 'Já existe um prêmio com este título' });
      }
    }
    
    await award.update(req.body);

    return res.json({
      id,
      title,
      quantity,
    });
  }

  async delete(req, res) {    
    const award = await Award.findByPk(req.params.id);

    if(!award) {
      return res.status(400).json({ error: 'Promoção não encontrado' });
    }
    await award.destroy();

    return res.json();
  }
}

export default new AwardController();