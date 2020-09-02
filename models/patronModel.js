const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PatronSchema = new Schema({
    email: {
      type: String,
      match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "Please enter a valid e-mail address"]
    },
    name: String,
    address: String,
    phoneNumber: String
})

const Patron = mongoose.model("Patron", PatronSchema)

module.exports = Patron;