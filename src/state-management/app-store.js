import { createWithEqualityFn } from "zustand/traditional";

export const useAppStore = createWithEqualityFn(
  (set) => ({
    quote: [],
    getQuotes: async () => {
      const response = await fetch(
        "https://quote-garden.onrender.com/api/v3/quotes/random"
      );
      const quotes = await response.json();
      set({ quote: quotes.data[0] });
    },
    quoteByAuthor: [],
    getQuoteByAuthor: async (quoteAuthor) => {
      const response = await fetch(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${quoteAuthor}`
      );
      const data = await response.json();
      set({ quoteByAuthor: data.data });
    },
    clicked: false,
    toggleClicked: () => set((state) => ({ clicked: !state.clicked })),
  }),
  Object.is
);
