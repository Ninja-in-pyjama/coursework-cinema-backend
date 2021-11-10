const genericController = (model) => ({
  async create({ body }, res) {
    try {
      const item = await model.create(body);
      return res.status(200).json(item);
    } catch (e) {
      console.log(e)
      return res.status(500).json(e);
    }
  },

  async delete({ params: { id } }, res) {
    try {
      await model.destroy({ where: { id } });
      return res.status(200).json({ status: "OK", "message": "success delete" });
    } catch (e) {
      return res.status(500).json(e);
    }
  },

  async get({ params: { id } }, res) {
    try {
      const item = await model.findOne({ where: { id } });
      return res.status(200).json(item);
    } catch (e) {
      return res.status(500).json(e);
    }
  },

  async getAll(req, res) {
    try {
      const items = await model.findAll();
      return res.status(200).json(items);
    } catch (e) {
      return res.status(500).json(e);
    }
  },

  async update({ body, params: { id } }, res) {
    try {
      const item = await model.update(body, { where: { id } });
      return res.status(200).json({ status: "OK", message: "success update" });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
});

module.exports = genericController;