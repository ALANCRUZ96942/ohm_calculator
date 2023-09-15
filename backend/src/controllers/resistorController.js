const Resistor = require('../database/models/resistor');
const { Op } = require('sequelize'); 
exports.test = async (req, res) => {
    res.send('test');
};

/*Get all bands*/
exports.getAllResistors = async (req, res) => {
  try {
    const resistors = await Resistor.findAll();
    res.status(200).json(resistors);
  } catch (e) {
    res.status(500).json({ error: 'There was an error'+e });
  }
};

/*Get the tolerance bands*/
exports.getResistorsByTolerance = async (req, res) => {
  try {

    const whereClause = {
      tolerance: {
        [Op.not]: null,
      }, 
    };
    const attributes = ['name', 'color', 'multipler','tolerance'];

    const resistors = await Resistor.findAll({
      where: whereClause,
      attributes: attributes,
    });
    
    res.status(200).json(resistors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'There was an error', error });
  }
};
/*Get the colors bands */
exports.getResistorsByColors = async (req, res) => {
  try {

    const whereClause = {
      tolerance: null, 
    };
    const attributes = ['name', 'color', 'multipler'];

    const resistors = await Resistor.findAll({
      where: whereClause,
      attributes: attributes,
    });
    
    res.status(200).json(resistors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'There was an error', error });
  }
};




