export type TaxMode = "OFF" | "INCLUSIVE" | "EXCLUSIVE";

export interface TaxCalculation {
  subtotal: number;
    taxableAmount: number;
      taxAmount: number;
        total: number;
        }

        export function calculateTax(
          amount: number,
            taxRate: number,
              mode: TaxMode
              ): TaxCalculation {
                if (mode === "OFF") {
                    return {
                          subtotal: amount,
                                taxableAmount: amount,
                                      taxAmount: 0,
                                            total: amount,
                                                };
                                                  }

                                                    if (mode === "INCLUSIVE") {
                                                        const taxableAmount = amount / (1 + taxRate / 100);
                                                            const taxAmount = amount - taxableAmount;

                                                                return {
                                                                      subtotal: amount,
                                                                            taxableAmount,
                                                                                  taxAmount,
                                                                                        total: amount,
                                                                                            };
                                                                                              }

                                                                                                const taxAmount = amount * (taxRate / 100);

                                                                                                  return {
                                                                                                      subtotal: amount,
                                                                                                          taxableAmount: amount,
                                                                                                              taxAmount,
                                                                                                                  total: amount + taxAmount,
                                                                                                                    };
                                                                                                                    }