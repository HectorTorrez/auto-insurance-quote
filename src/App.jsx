import { AppSeguro } from "./components/AppSeguro"
import { QuoteProvider } from "./context/QuoteProvider"

function App() {


  return (
    <QuoteProvider>
      <AppSeguro />
    </QuoteProvider>
  )
}

export default App
