const mongoose = require('mongoose')
const { Schema } = mongoose
const TransactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Transactions', TransactionSchema)
