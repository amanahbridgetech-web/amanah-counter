export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-black">
              Amanah Counter
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Modern Mobile Billing & Counter Operations
            </p>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold">
            A
          </div>
        </div>

        <div className="mt-10 space-y-4">

          <button className="w-full bg-black text-white py-4 rounded-2xl font-medium active:scale-[0.98] transition">
            Start Free Trial
          </button>

          <button className="w-full border border-gray-300 py-4 rounded-2xl font-medium">
            Login
          </button>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-3">

          <div className="bg-gray-100 rounded-2xl p-4">
            <p className="text-sm text-gray-500">
              India
            </p>

            <p className="font-semibold mt-1">
              GST Billing
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <p className="text-sm text-gray-500">
              GCC
            </p>

            <p className="font-semibold mt-1">
              VAT Billing
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
