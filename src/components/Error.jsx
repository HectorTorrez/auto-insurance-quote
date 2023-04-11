import { useQuote } from "../hooks/useQuote"

export const Error = () => {
  const { error } = useQuote()

  return (
    <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
      <strong className="font-bold">Error! </strong>
      <span className="block sm:inline">{error}</span>
    </p>
  )
}