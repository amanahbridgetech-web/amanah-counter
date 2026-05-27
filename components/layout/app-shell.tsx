type AppShellProps = {
      title: string
        children: React.ReactNode
        }

        export default function AppShell({
          title,
            children,
            }: AppShellProps) {
              return (
                  <main className="min-h-screen bg-[#f5f5f5]">

                        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                                <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">

                                          <h1 className="text-lg font-semibold">
                                                      {title}
                                                                </h1>

                                                                          <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
                                                                                      A
                                                                                                </div>

                                                                                                        </div>
                                                                                                              </header>

                                                                                                                    <section className="max-w-md mx-auto p-5">
                                                                                                                            {children}
                                                                                                                                  </section>

                                                                                                                                      </main>
                                                                                                                                        )
                                                                                                                                        }
