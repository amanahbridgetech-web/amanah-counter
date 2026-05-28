"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import AppShell from "@/components/layout/app-shell"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"

import { calculateTax } from "@/lib/tax"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function BillingPage() {

  const router = useRouter()

  const [cart, setCart] = useState<CartItem[]>([])

  const taxRate = 5
  const taxMode = "INCLUSIVE"

  const items = [
    {
      id: 1,
      name: "Tea",
      price: 10,
    },
    {
      id: 2,
      name: "Coffee",
      price: 20,
    },
    {
      id: 3,
      name: "Burger",
      price: 120,
    },
  ]

  function addToCart(item: Omit<CartItem, "quantity">) {

    const existing = cart.find((i) => i.id === item.id)

    if (existing) {

      setCart(
        cart.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        )
      )

      return
    }

    setCart([
      ...cart,
      {
        ...item,
        quantity: 1,
      },
    ])
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const tax = calculateTax(subtotal, taxRate, taxMode)

  const finalizeInvoice = () => {

    const invoiceData = {
      items: cart,
      subtotal,
      taxableAmount: tax.taxableAmount,
      taxAmount: tax.taxAmount,
      total: tax.total,
      paymentMethod: "Cash",
      taxMode,
    }

    const encoded = encodeURIComponent(
      JSON.stringify(invoiceData)
    )

    router.push(`/invoice?data=${encoded}`)
  }

  return (
    <AppShell title="Billing">

      <div className="space-y-5">

        <Card>

          <div className="space-y-3">

            <h2 className="font-semibold text-lg">
              Quick Items
            </h2>

            <div className="grid grid-cols-2 gap-3">

              {items.map((item) => (

                <button
                  key={item.id}
                  onClick={() => addToCart(item)}
                  className="border border-gray-300 rounded-2xl p-4 text-left bg-white active:scale-[0.98] transition"
                >

                  <p className="font-semibold">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    ₹{item.price}
                  </p>

                </button>

              ))}

            </div>

          </div>

        </Card>

        <Card>

          <div className="space-y-4">

            <h2 className="font-semibold text-lg">
              Cart
            </h2>

            {cart.length === 0 && (
              <p className="text-gray-500 text-sm">
                No items added.
              </p>
            )}

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 pb-3"
              >

                <div>

                  <p className="font-medium">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>

                </div>

                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>

              </div>

            ))}

          </div>

        </Card>

        <Card>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Taxable Amount</span>
              <span>
                ₹{tax.taxableAmount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>GST (5%)</span>
              <span>
                ₹{tax.taxAmount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-2xl font-bold tracking-tight text-emerald-600 pt-2">

              <span>Total</span>

              <span>
                ₹{tax.total.toFixed(2)}
              </span>

            </div>

            <div onClick={finalizeInvoice}>
              <Button>
                Finalize Invoice
              </Button>
            </div>

          </div>

        </Card>

      </div>

    </AppShell>
  )
}