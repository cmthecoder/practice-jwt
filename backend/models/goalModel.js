const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text value']
  },
  // We need to be able to know which user made the goal (Allow a user to be associated with a goal)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // Which model does the objectId pertain to
    ref: 'User',
  }
}, 
{timestamps: true})


module.exports = mongoose.model('Goal', goalSchema)