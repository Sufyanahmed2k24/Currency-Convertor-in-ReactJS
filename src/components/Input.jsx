import {useId} from "react"
const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId()
  return (
    <div className="w-full h-20 bg-white text-black rounded flex justify-between items-center px-4 py-2">

      <div className="flex flex-col gap-2 items-baseline">
      
        <label htmlFor={amountInputId}>{label}</label>
      
        <input 
        id={amountInputId} 
        className="outline-1 rounded w-40 px-2" 
        type="number"
        value={amount}
        disabled={amountDisable}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value)) }
        />
      
      </div>
      
      <select
        className="bg-gray-300 w-18 h-8 cursor-pointer px-2 rounded"
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        >
        {currencyOptions.map((currency)=>(
        <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    
    </div>
  )
}

export default Input
