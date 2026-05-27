type ButtonProps = {
      children: React.ReactNode
        variant?: "primary" | "secondary"
        }

        export default function Button({
          children,
            variant = "primary",
            }: ButtonProps) {
              const baseStyles =
                  "w-full py-4 rounded-2xl font-medium transition active:scale-[0.98]"

                    const variants = {
                        primary: "bg-black text-white",
                            secondary: "border border-gray-300 bg-white text-black",
                              }

                                return (
                                    <button className={`${baseStyles} ${variants[variant]}`}>
                                          {children}
                                              </button>
                                                )
                                                }
