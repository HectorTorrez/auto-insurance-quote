import { Fragment } from 'react'
import { brands, years, plans } from '../constants/index'
import { useQuote } from '../hooks/useQuote'
import { Error } from './Error'

export const Form = () => {

  const { handleChangeData, error, setError, data } = useQuote()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (Object.values(data).includes('')) {
      setError('All fields are required')
      return
    }

    setError('')

    //Todo: Quote
  }

  return (
    <>
      {
        error && <Error />
      }
      <form onSubmit={handleSubmit}
        action="">
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
            BRAND
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={handleChangeData}
          >
            <option value="">-- Select Brand --</option>

            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>{brand.name}</option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
            YEAR
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={handleChangeData}
          >
            <option value="">-- Select Year --</option>

            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
            Select a Plan
          </label>
          <div className='flex gap-3 items-center'>
            {
              plans.map(plan => (
                <Fragment key={plan.id}>
                  <label htmlFor="">{plan.name}</label>
                  <input type="radio" name='plan' value={plan.id} onChange={handleChangeData} />
                </Fragment>
              ))
            }
          </div>
        </div>

        <input type="submit" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' value="Quote" />
      </form>
    </>
  )
}