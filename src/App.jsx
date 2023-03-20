import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button";
import { formatearDinero } from "./helpers"

function App() {

  const [cantidad, setCantidad] = useState(10000);
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  function handleClickIncremento() {
    if (cantidad < MAX) {
      setCantidad(cantidad + STEP);
    }
  }

  function handleClickDecremento() {
    if (cantidad > MIN) {
      setCantidad(cantidad - STEP);
    }
  }

  return (
    <div className="my-10 max-w-lg mx-auto bg-white shadow p-10">
      
      <Header />

      <div className="flex justify-between my-7">
        <Button 
          operador="-" 
          fn={handleClickDecremento}
        />
        
        <Button 
          operador="+" 
          fn={handleClickIncremento}
        />
      </div>

      <input 
        type="range" 
        className="w-full h-10 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-center text-5xl font-bold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

    </div>
  )
}

export default App