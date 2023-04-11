import { createContext, useState } from 'react';

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')

  const handleChangeData = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value
    })
  }

  return (
    <QuoteContext.Provider value={{ handleChangeData, setError, error, data }}>
      {children}
    </QuoteContext.Provider>
  )
}