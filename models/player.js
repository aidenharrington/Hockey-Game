const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Player name is required'],
    },
    points: {
        type: Number,
        default: 0,
    },
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;