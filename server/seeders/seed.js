const db = require('../config/connection');
const { Event, User } = require('../models');

const userSeeds = require('./userSeed.json');
const eventSeeds = require('./eventSeed.json');

db.once('open', async () => {
  try {
    await Event.deleteMany({});
    await User.deleteMany({})
    await Event.insertMany(eventSeeds);
    await User.insertMany(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
