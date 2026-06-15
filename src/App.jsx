import { useState } from "react"
import Input from "./components/Input"
import useCurrencyInfo from "./hooks/useCurrencyInfo"


const App = () => {
const [amount, setAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("pkr")
const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo)

const swap = ()=>{
  setFrom(to)
  setTo(from)
  setAmount(convertedAmount)
  setConvertedAmount(amount)
}

const convert = ()=>{
if (currencyInfo[to]) {
  setConvertedAmount(amount*currencyInfo[to])
  
}
}
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-500 w-1/3 h-1/3 rounded-xl p-4">
      <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
      }}>
        <Input 
          label="From"
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onAmountChange={(amount)=> setAmount(amount)}
          onCurrencyChange={(currency)=> setFrom(currency)}
        />
        <div className="text-center my-2">
        <button
        type="button"
        onClick={swap}
        className="bg-blue-600 text-white w-30 h-8 rounded text-lg cursor-pointer font-semibold"
        >
          Swap
        </button>
        </div>

        <Input 
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        selectCurrency={to}
        amountDisable={true}
        onCurrencyChange={(currency)=> setTo(currency)}
        />

        <button type="submit" className="bg-green-600 w-full mt-4 py-2 rounded-md cursor-pointer font-semibold text-lg">Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
      </form>
      </div>
    </div>
  )
}

export default App