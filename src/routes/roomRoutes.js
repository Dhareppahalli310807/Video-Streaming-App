const express = require('express');
const Room = require('../models/Room');
const User = require('../models/User');

const router = express.Router();

router.post('/create', async (req, res) => {
    const { name } = req.body;
    const room = new Room({ name });
    await room.save();
    res.status(201).json(room);
});

router.post('/join', async (req, res) => {
    const { username, roomId } = req.body;
    const room = await Room.findById(roomId);
    const user = new User({ username, room: roomId });
    await user.save();
    room.users.push(user);
    await room.save();
    res.status(200).json(room);
});

module.exports = router;
