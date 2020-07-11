const Transactions = require('../Database/models/transactions')
const getGeneralError = (res, error) => {
  return res.status(500).json({
    success: false,
    error
  })
}
const getTransactions = async (req, res) => {
  try {
    const transations = await Transactions.find()
    return res.status(200).json({
      success: true,
      count: transations.length,
      data: transations
    })
  } catch (error) {
    getGeneralError(res, error)
  }
}

const addTransactions = async (req, res) => {
  try {
    const transation = await Transactions.create(req.body)
    return res.status(201).json({
      success: true,
      data: transation
    })
  } catch (error) {
    getGeneralError(res, error)
  }
}


const deleteTransactions = async (req, res) => {
  try {
    const transaction = await Transactions.findById(req.params.id)
    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      })
    }
    await transaction.remove()
    return res.status(204).json({
      success: true,
      data: {}
    })
  } catch (error) {
    getGeneralError(res, error)
  }
}

module.exports = {
  getTransactions,
  addTransactions,
  deleteTransactions
}