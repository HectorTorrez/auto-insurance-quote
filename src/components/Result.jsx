import { useCallback, useMemo, useRef } from "react"
import { useQuote } from "../hooks/useQuote"
import { brands, plans } from '../constants/index'
export const Result = () => {

  const { result, data } = useQuote()

  const { brand, plan, year } = data

  const yearRef = useRef(year)
  const [nameBrand] = useCallback(brands.filter(item => item.id === Number(brand)), [result])
  const [namePlan] = useCallback(plans.filter(item => item.id === Number(plan)), [result])


  if (result === 0) return null
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Result</h2>

      <p className="my-2">
        <span className="font-bold">Brand: </span>
        {nameBrand.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Year: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Quote:  </span>
        {result}
      </p>
    </div>
  )
}