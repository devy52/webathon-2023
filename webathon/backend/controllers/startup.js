import startupsModel from "../models/startups.js";


// Create a new startup
export const createStartup = async (req, res) => {
  try {
    const { startup_id, startup_name, startup_short_description, startup_long_description, phone, email } = req.body;
    const startup = await startupsModel.create({ startup_id, startup_name, startup_short_description, startup_long_description, phone, email });
    res.status(201).json({ message: 'Startup created successfully', startup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get all startups
export const getAllStartups = async (req, res) => {
  try {
    const startups = await startupsModel.findAll();
    res.status(200).json({ startups });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get a single startup by ID
export const getStartupById = async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await startupsModel.findOne({ where: { startup_id: id } });
    if (!startup) {
      return res.status(404).json({ message: 'Startup not found' });
    }
    res.status(200).json({ startup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Update a startup by ID
export const updateStartupById = async (req, res) => {
  try {
    const { id } = req.params;
    const { startup_name, startup_short_description, startup_long_description, phone, email } = req.body;
    const startup = await startupsModel.findOne({ where: { startup_id: id } });
    if (!startup) {
      return res.status(404).json({ message: 'Startup not found' });
    }
    startup.startup_name = startup_name;
    startup.startup_short_description = startup_short_description;
    startup.startup_long_description = startup_long_description;
    startup.phone = phone;
    startup.email = email;
    await startup.save();
    res.status(200).json({ message: 'Startup updated successfully', startup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Delete a startup by ID
export const deleteStartupById = async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await startupsModel.findOne({ where: { startup_id: id } });
    if (!startup) {
      return res.status(404).json({ message: 'Startup not found' });
    }
    await startup.destroy();
    res.status(200).json({ message: 'Startup deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
