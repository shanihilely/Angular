const mongoose = require("mongoose");

//definne the fields that the schema will have
//trim true means that the spaces in start and end will be trimed away
const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
})
const List = mongoose.model('List', ListSchema);

module.exports = { List }