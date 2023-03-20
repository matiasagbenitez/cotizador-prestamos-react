import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    setTotal(calcularTotalPagar(cantidad, meses));
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(total / meses);
  }, [total]);

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
    <div className="my-7 max-w-lg mx-auto bg-white shadow py-5 px-10 rounded-lg">
      <Header />

      <div className="flex justify-between my-7">
        <Button operador="-" fn={handleClickDecremento} />

        <Button operador="+" fn={handleClickIncremento} />
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

      <h2 className="text-xl font-bold text-gray-500 text-center mt-3">
        Elige un <span className="text-indigo-600">plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center text-gray-500 font-semibold"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      <div className="space-y-2 bg-gray-50 p-5">
        <h2 className="text-xl font-bold text-gray-500 text-center mt-3">
          Resumen<span className="text-indigo-600"> de pagos</span>
        </h2>

        <p className="text-gray-500 text-center font-bold">{meses} meses</p>

        <p className="text-gray-500 text-center font-bold">
          {formatearDinero(total)} total a pagar
        </p>

        <p className="text-gray-500 text-center font-bold">
          {formatearDinero(pago)} mensuales
        </p>
      </div>
    </div>
  );
}

export default App;
