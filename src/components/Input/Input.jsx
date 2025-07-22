import { useState } from "react"
import "./input.css"
import { Search } from "lucide-react"

export default function Input({...props}) {
  const [input, setInput] = useState("")

  const handleChange = (text) => {
    setInput(text)
  }

  return (
    <div className="container-input">
      <label htmlFor="search-country"><Search size={15}/></label>
      <input id="search-country" value={input} placeholder="Buscar pais" onChange={(e) => handleChange(e.target.value)} {...props}/>
    </div>
  )
}
