const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
