"use client"

import { useState } from "react"
import AppShell from "@/components/layout/app-shell"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function BillingPage() {

  const [cart, setCart] = useState<CartItem[]>([])

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

  const gst = subtotal * 0.05

  const total = subtotal + gst

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
                  className="border border-gray-300 rounded-2xl p-4 text-left bg-white"
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
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <Button>
              Finalize Invoice
            </Button>

          </div>

        </Card>

      </div>

    </AppShell>
  )
}