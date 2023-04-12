import { createContext, useState } from 'react';
import { getYearDifference } from '../helpers/getYearDifference';
import { getBrandIncrement } from '../helpers/getBrandIncrement';
import { getPlan } from '../helpers/getPlan';
import { formatMoney } from '../helpers/formatMoney';

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {

  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')
  const [result, setResult] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleChangeData = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value
    })
  }

  const quoteInsurance = () => {

    let result = 2000;

    const difference = getYearDifference(data.year)

    result -= ((difference * 3) * result) / 100

    result *= getBrandIncrement(data.brand)


    result *= getPlan(data.plan)

    result = formatMoney(result)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setResult(result)
    }, 400);
  }

  return (
    <QuoteContext.Provider value={{ handleChangeData, setError, error, data, quoteInsurance, result, loading }}>
      {children}
    </QuoteContext.Provider>
  )
}