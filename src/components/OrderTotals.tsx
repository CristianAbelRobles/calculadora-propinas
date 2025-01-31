import { useMemo } from "react"
import { OrderItem } from "../types"
import formatCurrenty from "../helpers"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

export default function OrderTotals( {order, tip, placeOrder} : OrderTotalsProps) {

  const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity*item.price), 0) , [order])
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrenty(subtotalAmount)}</span>
        </p>
        <p>Propina: {''}
          <span className="font-bold">{formatCurrenty(tipAmount)}</span>
        </p>
        <p>Total a pagar: {''}
          <span className="font-bold">{formatCurrenty(totalAmount)}</span>
        </p>
        <button
          className="w-full bg-black text-white font-bold mt-10 p-5 uppercase rounded-lg disabled:bg-gray-400 hover:opacity-90 hover:cursor-pointer"
          disabled={totalAmount=== 0}
          onClick={ () => placeOrder() }
        >Guardar Orden</button>
      </div>
    </>
  )
}
