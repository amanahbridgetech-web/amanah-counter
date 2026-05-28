"use client"

import { useSearchParams } from "next/navigation"

export default function InvoicePage() {

  const searchParams = useSearchParams()

  const data = searchParams.get("data")

  const parsedInvoice = data
    ? JSON.parse(decodeURIComponent(data))
    : null

  const invoice = {
    businessName: "Amanah Café",
    businessType: "GST Billing Invoice",
    country: "India",
    gstNumber: "29ABCDE1234F1Z5",
    address: "Bangalore, Karnataka",
    invoiceNumber: "INV-1001",
    uuid: "AMN-INV-UUID-001",
    status: "PAID",
    paymentMethod: parsedInvoice?.paymentMethod || "Cash",
    taxMode: parsedInvoice?.taxMode || "INCLUSIVE",
    date: new Date().toLocaleDateString(),

    items: parsedInvoice?.items || [],

    taxableAmount:
      parsedInvoice?.taxableAmount || 0,

    taxAmount:
      parsedInvoice?.taxAmount || 0,

    total:
      parsedInvoice?.total || 0,
  }

  return (
    <main className="min-h-screen bg-[#F5F5F5] p-4">

      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-sm p-6 space-y-6">

        <div className="text-center border-b pb-4 space-y-2">

          <h1 className="text-2xl font-bold text-[#111111]">
            {invoice.businessName}
          </h1>

          <p className="text-sm text-emerald-600 font-medium">
            {invoice.businessType}
          </p>

          <p className="text-sm text-gray-500">
            {invoice.address}
          </p>

          <p className="text-sm text-gray-500">
            GSTIN: {invoice.gstNumber}
          </p>

          <div className="inline-flex px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
            {invoice.status}
          </div>

        </div>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-500">
              Invoice No
            </span>

            <span className="font-medium">
              {invoice.invoiceNumber}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Date
            </span>

            <span>
              {invoice.date}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Country
            </span>

            <span>
              {invoice.country}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Payment
            </span>

            <span>
              {invoice.paymentMethod}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Tax Mode
            </span>

            <span>
              {invoice.taxMode}
            </span>
          </div>

        </div>

        <div className="border rounded-2xl overflow-hidden">

          <div className="grid grid-cols-5 bg-gray-100 text-sm font-medium p-3">

            <span className="col-span-3">
              Item
            </span>

            <span>
              Qty
            </span>

            <span className="text-right">
              Total
            </span>

          </div>

          {invoice.items.map((item: any, index: number) => (

            <div
              key={index}
              className="grid grid-cols-5 p-3 text-sm border-t"
            >

              <span className="col-span-3">
                {item.name}
              </span>

              <span>
                {item.quantity}
              </span>

              <span className="text-right">
                ₹{item.price * item.quantity}
              </span>

            </div>

          ))}

        </div>

        <div className="space-y-3 border-t pt-4">

          <div className="flex justify-between text-sm">

            <span className="text-gray-500">
              Taxable Amount
            </span>

            <span>
              ₹{invoice.taxableAmount.toFixed(2)}
            </span>

          </div>

          <div className="flex justify-between text-sm">

            <span className="text-gray-500">
              GST (5%)
            </span>

            <span>
              ₹{invoice.taxAmount.toFixed(2)}
            </span>

          </div>

          <div className="flex justify-between text-4xl font-bold tracking-tight text-emerald-600 pt-2">

            <span>
              Total
            </span>

            <span>
              ₹{invoice.total.toFixed(2)}
            </span>

          </div>

        </div>

        <div className="border-t pt-4 text-center space-y-2">

          <p className="text-sm text-gray-500">
            Thank you for your purchase
          </p>

          <p className="text-xs text-gray-500">
            Powered by Amanah POS
          </p>

          <p className="text-xs text-gray-500">
            Amanah Bridge Technologies © 2026
          </p>

        </div>

      </div>

    </main>
  )
}