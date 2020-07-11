import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
const initialState = {
  transactions: [],
  loading: true
}

export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  async function getTransactions() {
    try {
      const transactions = await axios('/api/v1/transactions')
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: transactions.data.data
      })
    } catch (error) {
      console.log('getTransactions -> error', error)
    }
  }


  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`)
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      })
    } catch (error) {
      console.log('deleteTransaction -> error', error)
    }
  }

  async function addTransation(transaction) {
    try {
      const res = await axios.post('/api/v1/transactions', transaction)
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      })
    } catch (error) {
      console.log('addTransation -> error', error)
    }
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransation,
      getTransactions,
      loading: state.loading
    }}>
      {children}
    </GlobalContext.Provider>
  )
}