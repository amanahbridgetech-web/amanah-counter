"use client"

import { useState } from "react"
import AppShell from "@/components/layout/app-shell"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"

type Item = {
  id: number
  name: string
  price: number
  category: string
}

export default function ItemsPage() {

  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Tea",
      price: 10,
      category: "Beverages",
    },
    {
      id: 2,
      name: "Coffee",
      price: 20,
      category: "Beverages",
    },
  ])

  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState("")
  const [category, setCategory] = useState("General")

  function addItem() {

    if (!itemName || !itemPrice) return

    const newItem: Item = {
      id: Date.now(),
      name: itemName,
      price: Number(itemPrice),
      category,
    }

    setItems([newItem, ...items])

    setItemName("")
    setItemPrice("")
    setCategory("General")
  }

  return (
    <AppShell title="Items Catalog">

      <div className="space-y-5">

        <Card>

          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-500">
                Item Name
              </label>

              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Burger"
                className="w-full mt-2 border border-gray-300 rounded-2xl p-4 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">

              <div>
                <label className="text-sm text-gray-500">
                  Price
                </label>

                <input
                  type="number"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full mt-2 border border-gray-300 rounded-2xl p-4 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full mt-2 border border-gray-300 rounded-2xl p-4 outline-none"
                >
                  <option>General</option>
                  <option>Beverages</option>
                  <option>Food</option>
                  <option>Retail</option>
                </select>
              </div>

            </div>

            <div onClick={addItem}>
              <Button>
                Add Item
              </Button>
            </div>

          </div>

        </Card>

        <div className="space-y-3">

          {items.map((item) => (

            <Card key={item.id}>

              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-lg">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.category}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-xl">
                    ₹{item.price}
                  </p>
                </div>

              </div>

            </Card>

          ))}

        </div>

      </div>

    </AppShell>
  )
}