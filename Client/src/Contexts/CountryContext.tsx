import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Country = {
  name: string;
  code: string;
  emoji?: string;
  currency: string;
  rate: number; // Exchange rate (base = USD)
};

const countries: Country[] = [
  { name: "Nepal", code: "NP", emoji: "🇳🇵", currency: "NPR", rate: 1 },
  { name: "India", code: "IN", emoji: "🇮🇳", currency: "INR", rate: 0.62 },
  { name: "USA", code: "US", emoji: "🇺🇸", currency: "USD", rate: 0.0073 },
  { name: "UK", code: "GB", emoji: "🇬🇧", currency: "GBP", rate: 0.0053 },
];

type CountryContextType = {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  countries: Country[];
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <CountryContext.Provider
      value={{ selectedCountry, setSelectedCountry, countries }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};
